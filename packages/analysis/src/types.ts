export type Candle = {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type Signal = {
  symbol: string;
  timeframe: string;
  side: "BUY" | "SELL" | "NONE";
  price: number;
  confidence: number;
  reason: string;
  timestamp: number;
};
