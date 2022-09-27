import {IMoMoPaymentOperations, IPPResponse} from '../interfaces';
import {IConfig} from '../interfaces/config';
import {IPayWithMoMoPayload} from '../interfaces/payload_momo_transaction';

export default class PaystackMomoPayment implements IMoMoPaymentOperations {
  config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  pay(payload: IPayWithMoMoPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
}
