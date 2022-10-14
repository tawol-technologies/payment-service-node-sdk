import {IGetAccountDetailsPayload} from './payload_banking';
import {
  IPayWithCardPayload, IPayWithSavedCardPayload, IRefundPayload, IValidateOtpPayload,
} from './payload_card_transaction';
import {IPayWithMoMoPayload} from './payload_momo_transaction';
import {ISendOtpPayload} from './payload_otp';

export interface IPPResponse<D = unknown> {
    status?: string;
    hasError: boolean;
    message: string;
    data: D;
    statusCode: number;
}

export interface ICardPaymentOperations {
    payWithCard(payload: IPayWithCardPayload): Promise<IPPResponse> | void;
    payWithSavedCard(payload: IPayWithSavedCardPayload): Promise<IPPResponse> | void;
    validatePaymentByOtp(payload: IValidateOtpPayload): Promise<IPPResponse> | void;
    verifyTransactionId(id: string): Promise<IPPResponse> | void;
    verifyTransactionRef(ref: string): Promise<IPPResponse> | void;
    refund(payload: IRefundPayload): Promise<IPPResponse> | void;
}

export interface IMoMoPaymentOperations {
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
