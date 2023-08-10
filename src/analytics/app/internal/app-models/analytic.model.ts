export type AnalyticColumn = {
  id: number;
  name: string;
  currentPrice: string;
  tickerSymbol: string;
  quantity: string;
  purchasePrice: string;
  purchaseDate: string;
  portfolio: number;
  sumFee: number;
};

export type TrendingType = 'neutral' | 'positive' | 'negative';

export type TrendingItem = {
  tag: string;
  type: TrendingType;
  content: string;
  created: string;
};
export type TrendingViews = {
  tag: TrendingItem[];
  crypto: TrendingItem[];
};
