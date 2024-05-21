import { HttpException, HttpStatus } from "@nestjs/common";

export class ApiResponseError extends HttpException {
  constructor(error: any, message: string ) {
    super({
      message: error.message || message,
      status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      },
      error.status || HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}