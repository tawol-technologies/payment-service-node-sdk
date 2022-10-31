import {IMoMoPaymentOperations, IPPResponse} from '../interfaces';
import {IPayWithMoMoPayload} from '../interfaces/payload_momo_transaction';

export default class PaystackMomoPayment implements IMoMoPaymentOperations {
  pay(payload: IPayWithMoMoPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
}
