export type ID = string;

export type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
};
