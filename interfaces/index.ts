import {IConfig} from './config';
import {IGetAccountDetailsPayload} from './payload_banking';
import {
  IPayWithCardPayload, IPayWithSavedCardPayload, IRefundPayload, IValidateOtpPayload,
} from './payload_card_transaction';
import {IPayWithMoMoPayload} from './payload_momo_transaction';
import {ISendOtpPayload} from './payload_otp';

export interface IPPResponse {
    hasError: boolean;
    message: string;
    data: any;
    statusCode: number;
}

export interface ICardPaymentOperations {
    config: IConfig;
    payWithCard(payload: IPayWithCardPayload): IPPResponse;
    payWithSavedCard(payload: IPayWithSavedCardPayload): IPPResponse;
    validatePaymentByOtp(payload: IValidateOtpPayload): IPPResponse;
    verifyTransactionId(id: string): IPPResponse;
    verifyTransactionRef(ref: string): IPPResponse;
    refund(payload: IRefundPayload): IPPResponse;
}

export interface IMoMoPaymentOperations {
    config: IConfig;
    pay(payload: IPayWithMoMoPayload): IPPResponse;
}

export interface IOtpManagerOperations {
    sendOtp(payload: ISendOtpPayload): IPPResponse;
    validateOtp(payload: IValidateOtpPayload): IPPResponse;
}

export interface IBankingOperations {
    getAccountDetails(payload: IGetAccountDetailsPayload): IPPResponse;
    getBanks(): IPPResponse;
}

export interface IProcessorOperations {
    cardPayment: ICardPaymentOperations;
    momoPayment: IMoMoPaymentOperations;
    otpManager: IOtpManagerOperations;
    banking: IBankingOperations;
}
