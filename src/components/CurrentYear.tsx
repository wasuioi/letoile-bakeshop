"use client";

// Rendered on the client so the copyright year reflects the visitor's current
// year, not the year the site was last built.
export default function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}
