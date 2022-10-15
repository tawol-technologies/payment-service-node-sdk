import {FlutterwaveEndPoints} from '../enums/FlutterwaveEndpoints';
import Helper from '../utils/Helper';
import {ICardPaymentOperations, IPPResponse} from '../interfaces';
import {
  IPayWithCardData,
  IPayWithCardPayload, IPayWithSavedCardPayload, IRefundPayload,
  IValidateOtpPayload,
} from '../interfaces/payload_card_transaction';
import ResponseBuilder from '../utils/ResponseBuilder';
import Flutterwave from './Flutterwave';
import CustomError from '../utils/CustomError';
import {AuthorizationModeEnum} from '../enums/AuthorizationModeEnum';

export default class FlutterwaveCardPayment implements ICardPaymentOperations {
  async payWithCard(payload: IPayWithCardPayload): Promise<IPPResponse<IPayWithCardData>> {
    try {
      // convert to snake case
      payload.authorization = {
        'mode': AuthorizationModeEnum.PIN,
        'pin': payload.pin,
      };
      payload = Helper.camelOBJToSnakeCase(payload) as IPayWithCardPayload;
      const res = await Flutterwave.sendRequest({
        method: 'POST',
        url: FlutterwaveEndPoints.CARD_CHARGE,
        data: payload,
      });
      return ResponseBuilder.buildFlutterwave(false, res);
    } catch (load: any) {
      throw CustomError.build(ResponseBuilder.buildFlutterwave(true, load.response));
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
