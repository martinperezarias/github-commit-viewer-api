import { ApiResponse, IApiResponse } from './api-response.entity';


export class ApiResponseOk<T> extends ApiResponse<T> {
  constructor({
    message = '',
    status = 200,
    success = true,
    data = null,
    info
  }: Partial<IApiResponse<T>>) {
    super({
      message,
      status,
      success,
      data,
      info,
    });
  }
}
