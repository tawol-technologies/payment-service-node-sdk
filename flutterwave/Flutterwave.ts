import {
  IProcessorOperations, ICardPaymentOperations, IBankingOperations,
  IMoMoPaymentOperations, IOtpManagerOperations,
} from '../interfaces';
import {IConfig} from '../interfaces/config';
import FlutterwaveBanking from './FlutterwaveBanking';
import FlutterwaveCardPayment from './FlutterwaveCardPayment';
import FlutterwaveMomoPayment from './FlutterwaveMomoPayment';
import FlutterwaveOtpManager from './FlutterwaveOtpManager';

export default class Flutterwave implements IProcessorOperations {
  cardPayment: ICardPaymentOperations;
  momoPayment: IMoMoPaymentOperations;
  otpManager: IOtpManagerOperations;
  banking: IBankingOperations;

  constructor(config: IConfig) {
    this.cardPayment = new FlutterwaveCardPayment(config);
    this.momoPayment = new FlutterwaveMomoPayment(config);
    this.otpManager = new FlutterwaveOtpManager();
    this.banking = new FlutterwaveBanking();
  }
}
