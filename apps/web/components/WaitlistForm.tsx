"use client";

import { useState } from "react";

type State = "idle" | "sending" | "done" | "error";

/**
 * Waitlist capture.
 *
 * The POST target does not exist yet — the Express service (apps/api) owns it.
 * Until then this validates, shows the real states, and does not pretend to have
 * stored anything.
 */
export function WaitlistForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const dark = tone === "dark";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("sending");
    // TODO: POST to `${process.env.NEXT_PUBLIC_API_URL}/waitlist` once the API exists.
    await new Promise((r) => setTimeout(r, 400));
    setState("done");
  }

  if (state === "done") {
    return (
      <p className={`text-sm ${dark ? "text-neutral-400" : "text-muted"}`}>
        Thank you. You will hear from us before anyone else.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="flex max-w-md items-end gap-3">
        <div className="flex-1">
          <label htmlFor="waitlist-email" className="eyebrow block">
            Email
          </label>
          <input
            id="waitlist-email"
            type="email"
            value={email}
            autoComplete="email"
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === "error") setState("idle");
            }}
            className={`mt-2 w-full border-b bg-transparent pb-2 text-base outline-none transition-colors focus:border-jade ${
              dark
                ? "border-neutral-700 text-neutral-100 placeholder:text-neutral-600"
                : "border-rule placeholder:text-muted"
            }`}
            placeholder="you@example.com"
          />
        </div>
        <button
          type="submit"
          disabled={state === "sending"}
          className={`shrink-0 border-b pb-2 text-sm transition-colors hover:text-jade hover:border-jade disabled:opacity-40 ${
            dark ? "border-neutral-700 text-neutral-100" : "border-ink"
          }`}
        >
          {state === "sending" ? "…" : "Join"}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-3 text-sm text-jade">That does not look like an email address.</p>
      )}
    </form>
  );
}
