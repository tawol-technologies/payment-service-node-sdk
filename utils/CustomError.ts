import {IPPResponse} from '../interfaces';
export default class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
  }

  static build(load: IPPResponse) {
    return new CustomError(load.message, load.statusCode);
  }
}
