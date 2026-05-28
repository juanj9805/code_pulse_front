export interface AddCategoryRequest {
  name: string;
  urlHandle: string;
}

export interface GetCategoryRequest {
  // The id value on c# is Guid but here we must use string
  id: string;
  name: string;
  urlHandle: string;
}
