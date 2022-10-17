import {FlutterwaveEndPointEnum} from './FlutterwaveEndpoints';
import Helper from '../utils/Helper';
import {ICardPaymentOperations} from '../interfaces';
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
  async payWithCard(payload: IPayWithCardPayload) {
    try {
      // convert to snake case
      payload.authorization = {
        'mode': AuthorizationModeEnum.PIN,
        'pin': payload.pin,
      };
      payload = Helper.camelOBJToSnakeCase(payload) as IPayWithCardPayload;
      const res = await Flutterwave.sendEncrypted({
        method: 'POST',
        url: FlutterwaveEndPointEnum.CARD_CHARGE,
        data: payload,
      });
      return ResponseBuilder.buildFlutterwave(false, res);
    } catch (load: any) {
      throw CustomError.build(ResponseBuilder.buildFlutterwave(true, load.response));
    }
  }

  async validatePaymentByOtp(payload: IValidateOtpPayload) {
    try {
      const res = await Flutterwave.send({
        method: 'POST',
        url: FlutterwaveEndPointEnum.VALIDATE_CHARGE,
        data: {
          otp: payload.otp,
          flw_ref: payload.ref,
        },
      });
      return ResponseBuilder.buildFlutterwave(false, res);
    } catch (load: any) {
      throw CustomError.build(ResponseBuilder.buildFlutterwave(true, load.response));
    }
  }

  async verifyTransactionId(id: number) {
    try {
      const res = await Flutterwave.send({
        method: 'GET',
        url: FlutterwaveEndPointEnum.TRANSACTION+`/${id}/verify`,
      });
      return ResponseBuilder.buildFlutterwave(false, res);
    } catch (load: any) {
      throw CustomError.build(ResponseBuilder.buildFlutterwave(true, load.response));
    }
  }

  async payWithSavedCard(payload: IPayWithSavedCardPayload) {
    try {
      payload = Helper.camelOBJToSnakeCase(payload) as IPayWithSavedCardPayload;
      const res = await Flutterwave.send({
        method: 'POST',
        url: FlutterwaveEndPointEnum.TOKENIZED_CHARGE,
        data: payload,
      });
      return ResponseBuilder.buildFlutterwave(false, res);
    } catch (load: any) {
      throw CustomError.build(ResponseBuilder.buildFlutterwave(true, load.response));
    }
  }

  async verifyTransactionRef(ref: string) {
    return ResponseBuilder.unimplemented<IPayWithCardData>();
  }
  async refund(payload: IRefundPayload) {
    return ResponseBuilder.unimplemented<IPayWithCardData>();
  }
}
