# Market Scanner

Production-oriented trading-analysis platform for real market data, deterministic technical strategies, alerts, history and backtesting. It deliberately fails closed when market data is unavailable: no synthetic candles and no fabricated signals.

## Important live-data note
Exness exposes API terms and supports MT5/algorithmic trading workflows, but an arbitrary public HTTP endpoint must not be assumed to be an authorized Exness market-data API. This project therefore uses a provider adapter and an optional MT5 bridge. Configure an officially authorized/compatible Exness connection before enabling live data. See `docs/EXNESS-CONNECTIVITY.md`.

## Run
1. `cp .env.example .env`
2. `pnpm install`
3. `docker compose up -d postgres redis`
4. `pnpm dev`
5. Open `http://localhost:3000`.

Without a configured provider the UI correctly reports DATA UNAVAILABLE and will not generate signals.
