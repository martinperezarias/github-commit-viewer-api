
export interface IPaginationInfo {
  totalCount: number;
  perPage?: number;
  page?: number;
}

export interface IApiResponse<T> {
  status: number;
  success: boolean;
  message?: string;
  data?: T;
  info?: IPaginationInfo;
}

export class ApiResponse<T> implements IApiResponse<T> {
  status: number;
  success: boolean;
  message?: string;
  data?: T;
  info?: IPaginationInfo;

  constructor({ message, status, success, data, info }: IApiResponse<T>) {
    this.message = message;
    this.status = status;
    this.success = success;
    this.data = data;
    this.info = info;
  }
}
