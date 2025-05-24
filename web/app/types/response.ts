type ResponseMessage = {
  message: string;
  type: 'success' | 'error';
};

export type Response<T> = {
  data: T;
  messages?: ResponseMessage[];
};

export type AuthResponse<T> = Response<T> & {
  access_token: string;
  refresh_token: string;
};

export type InfinitePaginationResponse<T> = {
  data: T[];
  next_cursor?: string;
  has_more: boolean;
  messages?: ResponseMessage[];
};