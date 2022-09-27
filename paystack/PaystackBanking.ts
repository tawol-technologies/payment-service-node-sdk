import {IBankingOperations, IPPResponse} from '../interfaces';
import {IGetAccountDetailsPayload} from '../interfaces/payload_banking';

export default class PaystackBanking implements IBankingOperations {
  getAccountDetails(payload: IGetAccountDetailsPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
  getBanks(): IPPResponse {
    throw new Error('Method not implemented.');
  }
}
