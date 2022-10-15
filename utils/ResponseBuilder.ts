import Helper from './Helper';
import {IPPResponse} from '../interfaces';
import {IPayWithCardData} from '../interfaces/payload_card_transaction';

export default class ResponseBuilder implements IPPResponse {
  hasError: boolean;
  message: string;
  data: any;
  statusCode: number;
  static instance: ResponseBuilder;

  constructor() {
    this.hasError = false;
    this.message = '';
    this.data = null;
    this.statusCode = 500;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ResponseBuilder();
    }
    return this.instance;
  }

  custom(hasError: boolean, message: string, data: any, statusCode: number) {
    this.hasError = hasError;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
    return this;
  }

  ok(message = 'OK', data?: any): ResponseBuilder {
    this.hasError = false;
    this.message = message;
    this.data = data;
    this.statusCode = 200;
    return this;
  }

  error(message?: string, data?: any): ResponseBuilder {
    this.hasError = true;
    this.message = message == null? 'Internal Server Error' : message;
    this.data = data;
    this.statusCode = 500;
    return this;
  }

  static buildFlutterwave(hasError: boolean, load: any): IPPResponse<IPayWithCardData> {
    console.log(load.data);
    return {
      hasError: hasError,
      statusCode: load.status ?? 417,
      ...load.data,
      data: Helper.snakeOBJToCamelCase(load.data.data),
    };
  }

  static unimplemented<D>(): IPPResponse<D> {
    return {
      hasError: true,
      statusCode: 404,
      message: 'Method not implemented',
      data: {} as D,
    };
  }
}
