import {IMoMoPaymentOperations, IPPResponse} from '../interfaces';
import {IPayWithMoMoPayload} from '../interfaces/payload_momo_transaction';

export default class FlutterwaveMomoPayment implements IMoMoPaymentOperations {
  pay(payload: IPayWithMoMoPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
}
