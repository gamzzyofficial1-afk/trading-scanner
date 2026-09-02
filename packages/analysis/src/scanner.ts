import type { Candle, Signal } from "./types";

function sma(values: number[], period: number): number {
  if (values.length < period) {
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  const slice = values.slice(-period);
  return slice.reduce((sum, value) => sum + value, 0) / period;
}

export function scanCandles(
  symbol: string,
  timeframe: string,
  candles: Candle[]
): Signal {
  if (candles.length < 20) {
    return {
      symbol,
      timeframe,
      side: "NONE",
      price: candles.at(-1)?.close ?? 0,
      confidence: 0,
      reason: "Not enough candle data",
      timestamp: Date.now(),
    };
  }

  const closes = candles.map((candle) => candle.close);
  const price = closes[closes.length - 1];

  const fastAverage = sma(closes, 9);
  const slowAverage = sma(closes, 20);

  let side: Signal["side"] = "NONE";
  let confidence = 50;
  let reason = "No clear signal";

  if (fastAverage > slowAverage && price > fastAverage) {
    side = "BUY";
    confidence = 75;
    reason = "Price is above the fast average and fast average is above the slow average";
  } else if (fastAverage < slowAverage && price < fastAverage) {
    side = "SELL";
    confidence = 75;
    reason = "Price is below the fast average and fast average is below the slow average";
  }

  return {
    symbol,
    timeframe,
    side,
    price,
    confidence,
    reason,
    timestamp: Date.now(),
  };
}
