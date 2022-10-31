import {IBankingOperations, IPPResponse} from '../interfaces';
import {IGetAccountDetailsPayload} from '../interfaces/payload_banking';
import {ITransferPayload, IRefundPayload} from '../interfaces/payload_card_transaction';

export default class PaystackBanking implements IBankingOperations {
  transfer(payload: ITransferPayload): Promise<IPPResponse<any>> {
    throw new Error('Method not implemented.');
  }
  refund(payload: IRefundPayload): Promise<IPPResponse<any>> {
    throw new Error('Method not implemented.');
  }
  getAccountDetails(payload: IGetAccountDetailsPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
  getBanks(): IPPResponse {
    throw new Error('Method not implemented.');
  }
}
