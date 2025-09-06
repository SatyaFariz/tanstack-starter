import { type HttpStatusCode } from './http-status';
type ResponseMessage = {
  message: string;
  type: 'success' | 'error';
};

export type BaseResponse = {
  httpCode: HttpStatusCode;
  messages?: ResponseMessage[];
};

export type Response<T> = BaseResponse & {
  data: T;
};

export type AuthResponse<T> = Response<T> & {
  access_token: string;
  refresh_token: string;
};

export type InfinitePaginationResponse<T> = BaseResponse & {
  data: T[];
  next_cursor?: string;
  has_more: boolean;
};
