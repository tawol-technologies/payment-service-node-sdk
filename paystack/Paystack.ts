import {
  IProcessorOperations, ICardPaymentOperations, IMoMoPaymentOperations,
  IOtpManagerOperations, IBankingOperations,
} from '../interfaces';
import {IConfig} from '../interfaces/config';
import PaystackBanking from './PaystackBanking';
import PaystackCardPayment from './PaystackCardPayment';
import PaystackMomoPayment from './PaystackMomoPayment';
import PaystackOtpManager from './PaystackOtpManager';

export default class Paystack implements IProcessorOperations {
  cardPayment: ICardPaymentOperations;
  momoPayment: IMoMoPaymentOperations;
  otpManager: IOtpManagerOperations;
  banking: IBankingOperations;

  constructor(config: IConfig) {
    this.cardPayment = new PaystackCardPayment();
    this.momoPayment = new PaystackMomoPayment();
    this.otpManager = new PaystackOtpManager();
    this.banking = new PaystackBanking();
  }
}
