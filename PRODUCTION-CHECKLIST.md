# Production checklist

Before public launch:

- Configure an authorized real market-data source; leave blank in development to fail closed.
- Use TLS at the edge and secure, httpOnly cookies for authentication.
- Replace development PostgreSQL credentials and JWT secret with managed secrets.
- Add a real identity provider/session layer and email verification.
- Put Redis behind private networking and add a durable job queue for notifications.
- Run the API and signal worker as separate processes so a slow notification provider cannot block market analysis.
- Add provider-specific symbol mapping from the live instrument catalogue.
- Add provider clock/latency monitoring and reject stale candles.
- Add Playwright E2E tests and load tests before production traffic.
- Use a licensed charting package appropriate to your distribution model.
- Keep live order execution disabled until a separately reviewed broker integration is enabled.
