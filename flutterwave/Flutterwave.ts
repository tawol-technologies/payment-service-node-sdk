import axios, {AxiosRequestConfig} from 'axios';
import Flutterwave3DES from '../encryptions/Flutterwave3DES';
import {FlutterwaveEndPoints} from '../enums/FlutterwaveEndpoints';
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
  static config: IConfig;

  constructor(config: IConfig) {
    Flutterwave.config = config;
    this.cardPayment = new FlutterwaveCardPayment();
    this.momoPayment = new FlutterwaveMomoPayment();
    this.otpManager = new FlutterwaveOtpManager();
    this.banking = new FlutterwaveBanking();
  }

  static buildFlutterwavePayload(payload: any) {
    return {
      'client': Flutterwave3DES.doEncryption(
          this.config.encryptionKey,
          payload
      ),
      'public_key': this.config.publicKey,
    };
  }

  static sendRequest(config: AxiosRequestConfig) {
    return axios({
      baseURL: FlutterwaveEndPoints.BASE_URL,
      headers: {
        'authorization': 'Bearer '+this.config.secretKey,
      },
      ...config,
      data: this.buildFlutterwavePayload(config.data),
    });
  }
}
