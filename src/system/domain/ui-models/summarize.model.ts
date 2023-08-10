export type SummarizeType = 'neutral' | 'positive' | 'negative' | 'analyzing';

export type SummarizeItem = {
  tag: string;
  type: SummarizeType;
  content: string;
  created: string;
};
