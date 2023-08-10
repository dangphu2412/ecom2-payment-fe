export type AssetSearchResult = {
  symbol: string;
  current_price: string;
  type: string;
  name: string;
  image_url: string;
};

export interface AssetOverview {
  id: number;
  current_price: number;
  name: string;
  ticker_symbol: string;
  asset_type: string;
  quantity: string;
  purchase_price: string;
  purchase_date: string;
  portfolio: number;
  sum_fee: number;
  history: History[];
}

export interface History {
  asset: number;
  quantity: string;
  price: string;
  created: string;
}

export type AssetsUsecase = {
  search(symbol: string): Promise<AssetSearchResult[]>;
  getOverview(): Promise<AssetOverview[]>;
};
