export interface ApiResponse<T> {
  code: number;
  body: T;
  additionalProperties?: {};
}
