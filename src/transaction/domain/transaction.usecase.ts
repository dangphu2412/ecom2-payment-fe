export type CreateFeePayload = {
  date: string;
  fee: string;
  note: string;
};

export type CreateTransactionPayload = {
  asset: string;
  portfolio_id: number;
  transaction_type: string;
  quantity: number;
  price: number;
  transaction_date: string;
  fee: number;
};

type Asset = {
  id: string;
  name: string;
  symbol: string;
};

export type Transaction = {
  id: string;
  created: string;
  modified: string;
  transaction_type: string;
  transaction_date: string;
  quantity: string;
  price: string;
  fee: string;
  notes: string;
  asset_info: Asset;
};

export type TransactionUsecase = {
  get(): Promise<Transaction[]>;
  createFee(payload: CreateFeePayload): Promise<void>;
  createTransaction(payload: CreateTransactionPayload): Promise<void>;
};
