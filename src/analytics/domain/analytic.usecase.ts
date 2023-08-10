export type HoldingModel = {
  holding: string;
  amount: number;
  currentValue: number;
  currency: string;
  totalProfit: string;
  IRR: string;
};

export interface Performer {
  id: number;
  ticker_symbol: string;
  gained_amount_in_usd: number;
  percentage: number;
}

export type InvestmentAnalysisResults = {
  id: number;
  total_invested: number;
  total_value: number;
  total_profit: number;
  best_performer: Performer;
  worst_performer: Performer;
};

export interface Trending {
  crypto: Crypto;
  tag: Tag;
}

export interface Crypto {
  data: TrendDetail[];
  type: string;
  created: string;
}

export interface TrendDetail {
  tag: string;
  type: string;
  key_points: string;
}

export interface Tag {
  data: TrendDetail[];
  type: string;
  created: string;
}

export interface New {
  id: number;
  content: string;
  summary: any;
  sentiment: any;
  source: string;
  published_date: string;
  topic: string;
}

export type AnalyticUseCase = {
  getInvestmentAnalysisResults: (
    portfolioId: number
  ) => Promise<InvestmentAnalysisResults>;
  getTrending: () => Promise<Trending>;
  getNews: () => Promise<New[]>;
};
