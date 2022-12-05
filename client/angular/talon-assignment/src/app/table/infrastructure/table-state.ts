export interface TableState<T> {
  objects: T[];
  total: number;
  pageSize: number;
  offset: number;
  filters: Record<string, string[]>;
}

export interface TableDataResponse<T> {
  objects: T[],
  pageSize: number,
  offset: number,
  total: number
}
