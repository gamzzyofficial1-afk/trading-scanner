import { Candle } from "@scanner/analysis";

export interface MarketDataProvider {
  getCandles(
    symbol: string,
    timeframe: string,
    limit?: number
  ): Promise<Candle[]>;
}

/**
 * Market-data boundary for the scanner.
 *
 * The real Exness/MT5 connection will be implemented separately.
 * This provider intentionally does not pretend to be an Exness API.
 */
export class UnconfiguredMarketDataProvider
  implements MarketDataProvider
{
  async getCandles(
    _symbol: string,
    _timeframe: string,
    _limit = 100
  ): Promise<Candle[]> {
    throw new Error(
      "Market data provider is not configured. Connect an authorized Exness/MT5 provider before requesting live candles."
    );
  }
}
