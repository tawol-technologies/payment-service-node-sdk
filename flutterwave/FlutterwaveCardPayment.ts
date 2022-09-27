import {ICardPaymentOperations, IPPResponse} from '../interfaces';
import {IConfig} from '../interfaces/config';
import {
  IPayWithCardPayload, IPayWithSavedCardPayload, IRefundPayload,
  IValidateOtpPayload,
} from '../interfaces/payload_card_transaction';

export default class FlutterwaveCardPayment implements ICardPaymentOperations {
  config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  payWithCard(payload: IPayWithCardPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
  payWithSavedCard(payload: IPayWithSavedCardPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
  validatePaymentByOtp(payload: IValidateOtpPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
  verifyTransactionId(id: string): IPPResponse {
    throw new Error('Method not implemented.');
  }
  verifyTransactionRef(ref: string): IPPResponse {
    throw new Error('Method not implemented.');
  }
  refund(payload: IRefundPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
}
