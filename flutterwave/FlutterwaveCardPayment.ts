import {FlutterwaveEndPoints} from '../enums/FlutterwaveEndpoints';
import Helper from '../Helper';
import {ICardPaymentOperations} from '../interfaces';
import {
  IPayWithCardPayload, IPayWithSavedCardPayload, IRefundPayload,
  IValidateOtpPayload,
} from '../interfaces/payload_card_transaction';
import ResponseBuilder from '../ResponseBuilder';
import Flutterwave from './Flutterwave';

export default class FlutterwaveCardPayment implements ICardPaymentOperations {
  async payWithCard(payload: IPayWithCardPayload) {
    try {
      // convert to snake case
      payload = Helper.camelOBJToSnakeCase(payload);
      const res = await Flutterwave.sendRequest({
        method: 'POST',
        url: FlutterwaveEndPoints.CARD_CHARGE,
        data: payload,
      });
      return ResponseBuilder.buildFlutterwave(false, res);
    } catch (load: any) {
      return ResponseBuilder.buildFlutterwave(true, load.response);
    }
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
