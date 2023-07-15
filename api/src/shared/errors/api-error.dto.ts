import { ErrorCodes } from './error-codes.enum';

export class ApiErrorDto {
  code: ErrorCodes;
  message: string;
  details: any;
  timestamp: string;

  constructor({
    code,
    message,
    details = {},
  }: {
    code: ErrorCodes;
    message: string;
    details?: any;
  }) {
    this.code = code;
    this.message = message;
    this.details = details;
    this.timestamp = new Date().toISOString();
  }
}
