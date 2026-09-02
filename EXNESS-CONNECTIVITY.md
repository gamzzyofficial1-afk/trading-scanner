# Exness connectivity

The application does not pretend that a generic public API is an Exness API. The live-data boundary is `MarketDataProvider` in `apps/api/src/marketData.ts`.

Recommended production options:

1. Use an Exness-authorized API/data connection if Exness has approved it for your account/use case.
2. Use a securely isolated MT5 bridge for an Exness MT5 account. The bridge should run with the MetaTrader 5 terminal and expose only the minimum read-only market-data methods required by this application.
3. Keep execution disabled unless an authorized trading integration is separately implemented, reviewed and explicitly enabled by the user.

The application expects normalized instruments and candles from the provider and does not hard-code symbols such as XAUUSDm. The provider's instrument catalogue is authoritative.
