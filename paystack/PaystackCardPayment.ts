import {ICardPaymentOperations, IPPResponse} from '../interfaces';
import {
  IPayWithCardPayload, IPayWithSavedCardPayload, IValidateOtpPayload,
  IPayWithCardData,
} from '../interfaces/payload_card_transaction';
import ResponseBuilder from '../utils/ResponseBuilder';

export default class PaystackCardPayment implements ICardPaymentOperations {
  async payWithCard(payload: IPayWithCardPayload): Promise<IPPResponse<IPayWithCardData>> {
    return ResponseBuilder.unimplemented<IPayWithCardData>();
  }
  async payWithSavedCard(payload: IPayWithSavedCardPayload) {
    return ResponseBuilder.unimplemented<IPayWithCardData>();
  }
  async validatePaymentByOtp(payload: IValidateOtpPayload) {
    return ResponseBuilder.unimplemented<IPayWithCardData>();
  }
  async verifyTransactionId(id: number) {
    return ResponseBuilder.unimplemented<IPayWithCardData>();
  }
  async verifyTransactionRef(ref: string) {
    return ResponseBuilder.unimplemented<IPayWithCardData>();
  }
}
