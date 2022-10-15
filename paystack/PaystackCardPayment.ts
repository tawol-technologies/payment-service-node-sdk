import {ICardPaymentOperations, IPPResponse} from '../interfaces';
import {
  IPayWithCardPayload, IPayWithSavedCardPayload, IValidateOtpPayload,
  IRefundPayload,
  IPayWithCardData,
} from '../interfaces/payload_card_transaction';
import ResponseBuilder from '../utils/ResponseBuilder';

export default class PaystackCardPayment implements ICardPaymentOperations {
  async payWithCard(payload: IPayWithCardPayload): Promise<IPPResponse<IPayWithCardData>> {
    return ResponseBuilder.unimplemented<IPayWithCardData>();
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
