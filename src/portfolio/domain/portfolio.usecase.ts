import { AssetOverview } from '../../assets/domain/assets.usecase';

export type Portfolio = {
  id: number;
  name: string;
  best_performer: BestPerformer;
  worst_performer: WorstPerformer;
  description: string;
  created_at: string;
  user: number;
};

export type BestPerformer = {
  id: number;
  ticker_symbol: string;
  gained_amount_in_usd: number;
};

export type WorstPerformer = {
  id: number;
  ticker_symbol: string;
  gained_amount_in_usd: number;
};

export type CreatePortfolioPayload = {
  name: string;
  description: string;
};

export interface Insight {
  profit_factor: string;
  sharpe_ratio: string;
  ulcer_index: string;
  information_ratio: string;
  appraisal_ratio: string;
  ucrp_sharpe: string;
  beta_alpha: string;
  annualized_return: string;
  annualized_volatility: string;
  longest_drawdown: string;
  max_drawdown: string;
  winning_days: string;
  annual_turnover: string;
}

export type PortfolioDetail = Portfolio & {
  assets: AssetOverview[];
  insights: Insight;
};

export type PortfolioUseCase = {
  getAll: () => Promise<Portfolio[]>;
  getDetail: (portfolioId: number) => Promise<PortfolioDetail>;
  createOne: (payload: CreatePortfolioPayload) => Promise<void>;
  deleteOne: (portfolioId: number) => Promise<void>;
};
