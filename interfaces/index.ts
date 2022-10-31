import {IGetAccountDetailsPayload} from './payload_banking';
import {
  IPayWithCardData, IPayWithCardPayload, IPayWithSavedCardPayload,
  IRefundPayload, ITransferPayload, IValidateOtpPayload,
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
    payWithCard(payload: IPayWithCardPayload): Promise<IPPResponse<IPayWithCardData>>;
    payWithSavedCard(payload: IPayWithSavedCardPayload): Promise<IPPResponse<IPayWithCardData>>;
    validatePaymentByOtp(payload: IValidateOtpPayload): Promise<IPPResponse<IPayWithCardData>>;
    verifyTransactionId(id: number): Promise<IPPResponse<IPayWithCardData>>;
    verifyTransactionRef(ref: string): Promise<IPPResponse<IPayWithCardData>>;
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
    transfer(payload: ITransferPayload): Promise<IPPResponse<any>>;
    refund(payload: IRefundPayload): Promise<IPPResponse<any>>;
}

export interface IProcessorOperations {
    cardPayment: ICardPaymentOperations;
    momoPayment: IMoMoPaymentOperations;
    otpManager: IOtpManagerOperations;
    banking: IBankingOperations;
}
