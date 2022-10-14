import {ICardPaymentOperations, IPPResponse} from '../interfaces';
import {
  IPayWithCardPayload, IPayWithSavedCardPayload, IValidateOtpPayload,
  IRefundPayload,
} from '../interfaces/payload_card_transaction';

export default class PaystackCardPayment implements ICardPaymentOperations {
  payWithCard(payload: IPayWithCardPayload): Promise<IPPResponse> {
    throw new Error('Method not implemented.');
  }
  payWithSavedCard(payload: IPayWithSavedCardPayload) {
    throw new Error('Method not implemented.');
  }
  validatePaymentByOtp(payload: IValidateOtpPayload) {
    throw new Error('Method not implemented.');
  }
  verifyTransactionId(id: string) {
    throw new Error('Method not implemented.');
  }
  verifyTransactionRef(ref: string) {
    throw new Error('Method not implemented.');
  }
  refund(payload: IRefundPayload) {
    throw new Error('Method not implemented.');
  }
}
