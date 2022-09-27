export interface IPayWithCardPayload {
    cardNumber: string;
}

export interface IPayWithSavedCardPayload {
    token: string;
}

export interface IValidateOtpPayload {
    ref: string;
    otp: string;
}

export interface IRefundPayload {
    ref: string,
    amount: string;
}
