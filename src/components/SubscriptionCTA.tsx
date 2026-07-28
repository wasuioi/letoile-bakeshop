"use client";

import { useState } from "react";
import { email as contactEmail } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// Public, client-side identifier by design — Web3Forms embeds it in browser
// code on every site that uses the service, so there is nothing to protect and
// no reason to proxy it through a serverless route.
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function SubscriptionCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const trimmed = email.trim();

    // A bot filled the hidden field. Show the same confirmation a human sees so
    // it learns nothing, and send nothing.
    const botcheck = new FormData(form).get("botcheck");
    if (typeof botcheck === "string" && botcheck.length > 0) {
      setStatus("success");
      return;
    }

    // Native validation already requires a value, but an all-whitespace string
    // satisfies `required` — catch it before it reaches the API.
    if (!trimmed) return;

    setStatus("submitting");

    try {
      if (!accessKey) throw new Error("NEXT_PUBLIC_WEB3FORMS_KEY is not set");

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          email: trimmed,
          subject: "New daily bake reservation — L'Étoile",
          from_name: "L'Étoile Bakeshop (demo site)",
          botcheck: "",
        }),
      });

      // Web3Forms can answer HTTP 200 with `success: false`, so the status code
      // alone is not proof of delivery. Both must agree before we tell the
      // visitor their details arrived.
      const result: unknown = await response.json();
      const delivered =
        response.ok &&
        typeof result === "object" &&
        result !== null &&
        (result as { success?: unknown }).success === true;

      setStatus(delivered ? "success" : "error");
    } catch {
      // Network failure, offline, blocked request, malformed JSON — every path
      // that is not a confirmed success ends here rather than falling through.
      setStatus("error");
    }
  }

  return (
    <section
      id="subscribe"
      className="relative scroll-mt-24 overflow-hidden py-28 sm:py-40"
    >
      {/* Radial gold glow */}
      <div
        aria-hidden
        className="animate-glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.22),rgba(217,119,6,0.06)_45%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-[12px] font-medium uppercase tracking-[0.4em] text-gold-bright">
          La Liste Quotidienne
        </p>
        <h2 className="mt-5 font-display text-4xl leading-tight font-medium text-cream sm:text-6xl">
          The morning bake,
          <br />
          <em className="font-normal text-gold-bright">reserved in your name</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory-dim">
          Join the daily bake subscription and your loaf is pulled from the
          oven, wrapped, and set aside before the doors open. Pause or change
          your standing order any morning.
        </p>

        <div aria-live="polite">
          {status === "success" ? (
            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-gold/40 bg-obsidian-soft/80 px-8 py-7 backdrop-blur-md">
              <p className="font-display text-2xl italic text-gold-bright">
                Your bake is reserved.
              </p>
              {/* No confirmation email is promised: Web3Forms notifies the
                  bakery, and autoresponders are a paid feature we do not use.
                  If one is ever enabled, the old line can come back. */}
              <p className="mt-2 text-sm leading-relaxed text-ivory-dim">
                We have your details — see you at seven.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="cta-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cta-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "submitting"}
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-white/15 bg-obsidian-soft/80 px-6 py-3.5 text-sm text-ivory placeholder:text-ivory-dim/80 backdrop-blur-md transition-colors duration-300 focus:border-gold disabled:opacity-60"
                />

                {/* Honeypot. Moved off-screen rather than hidden with
                    `display: none` or `type="hidden"`, both of which crawlers
                    routinely skip. Removed from the tab order and from the
                    accessibility tree, so no human ever reaches it. */}
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-[-9999px] h-px w-px opacity-0"
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="shrink-0 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-obsidian shadow-[0_0_28px_rgba(217,119,6,0.4)] transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_44px_rgba(245,158,11,0.55)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Reserving…" : "Reserve My Bake"}
                </button>
              </form>

              {status === "error" && (
                <div className="mx-auto mt-5 max-w-md rounded-2xl border border-red-400/30 bg-obsidian-soft/80 px-8 py-6 backdrop-blur-md">
                  <p className="text-sm font-semibold text-red-300">
                    Something went wrong on our end.
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ivory-dim">
                    Please try again, or email us at{" "}
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-ivory underline underline-offset-4 transition-colors duration-300 hover:text-gold-bright"
                    >
                      {contactEmail}
                    </a>
                    .
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        <p className="mt-5 text-xs tracking-wide text-ivory-dim/80">
          120 places per bakery, per day. No commitment — cancel any morning
          before 5 a.m.
        </p>
        <p className="mt-2 text-xs tracking-wide text-ivory-dim/80">
          Demo form on a concept site — submissions reach a test inbox and are
          not stored or used.
        </p>
      </div>
    </section>
  );
}
