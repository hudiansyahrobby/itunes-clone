export type ListResponse<T> = {
  data: {
    results: T[];
    resultCount: number;
  };
};
