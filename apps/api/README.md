# @kaew/api

Express service. Not built yet — scaffolded so the shape of the system is decided.

When this session happens, it owns:

- `POST /waitlist` — email capture into Supabase, double opt-in
- `GET /edition/current` — the real remaining count, read from `orders`, never inflated
- `POST /checkout` — creates a Stripe Checkout Session for one unit, no discount codes
- `POST /webhooks/stripe` — the only place inventory decrements; assigns the edition
  number at random from the remaining pool inside a transaction so two buyers can
  never receive the same number
- `GET /shipping/estimate?region=` — region-based estimate shown before checkout

The 50-unit cap is enforced in the database (a unique constraint on edition number
plus a row-count check), not in application code.
