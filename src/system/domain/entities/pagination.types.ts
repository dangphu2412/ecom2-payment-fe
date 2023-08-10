type PaginationMetadata = {
  count: string;
  next: string;
  previous: string;
};

export type Pagination<T> = {
  results: T[];
} & PaginationMetadata;
