export interface FilterParam {
  name: string;
  value: string;
}

export interface TableState<T> {
  objects: T[];
  total: number;
  pageSize: number;
  offset: number;
  filters: FilterParam[];
}

export interface TableDataResponse<T> {
  objects: T[],
  pageSize: number,
  offset: number,
  total: number
}
