import {IBankingOperations, IPPResponse} from '../interfaces';
import {IGetAccountDetailsPayload} from '../interfaces/payload_banking';
import {
  IRefundPayload, ITransferPayload,
} from '../interfaces/payload_card_transaction';
import CustomError from '../utils/CustomError';
import Helper from '../utils/Helper';
import ResponseBuilder from '../utils/ResponseBuilder';
import Flutterwave from './Flutterwave';
import {FlutterwaveEndPointEnum} from './FlutterwaveEndpoints';

export default class FlutterwaveBanking implements IBankingOperations {
  getAccountDetails(payload: IGetAccountDetailsPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
  getBanks(): IPPResponse {
    throw new Error('Method not implemented.');
  }
  async transfer(payload: ITransferPayload) {
    try {
      payload.currency = payload.currency ?? Flutterwave.config.currency;
      payload = Helper.camelOBJToSnakeCase(payload) as ITransferPayload;
      console.log(payload);
      const res = await Flutterwave.send({
        method: 'POST',
        url: FlutterwaveEndPointEnum.TRANSFER,
        data: payload,
      });
      return ResponseBuilder.buildFlutterwave(false, res);
    } catch (load: any) {
      throw CustomError.build(ResponseBuilder.buildFlutterwave(true, load.response));
    }
  }
  async refund(payload: IRefundPayload) {
    return ResponseBuilder.unimplemented();
  }
}
