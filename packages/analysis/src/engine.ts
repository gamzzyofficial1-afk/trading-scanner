import { Candle, Signal } from "./types";

export function analyze(
  candles: Candle[],
  symbol: string,
  timeframe: string
): Signal {
  const last = candles[candles.length - 1];

  if (!last) {
    return {
      symbol,
      timeframe,
      side: "NONE",
      price: 0,
      confidence: 0,
      reason: "No candle data",
      timestamp: Date.now(),
    };
  }

  return {
    symbol,
    timeframe,
    side: "NONE",
    price: last.close,
    confidence: 0,
    reason: "Analysis engine initialized",
    timestamp: Date.now(),
  };
}
