export type TAuthorization = {
    mode: string;
    pin: string;
}

export interface IPayWithCardPayload {cardNumber: string;
    cvv: string;
    expiryMonth: string;
    expiryYear: string;
    currency: string;
    amount: string;
    phoneNumber: string;
    email: string;
    fullname: string;
    txRef: string;
    redirectUrl: string;
    pin: string;
    authorization: TAuthorization,
    meta:any;
}

export interface IPayWithSavedCardPayload {
    token: string;
    amount: number;
    email: string;
    firstName: string;
    lastName: string;
    ip: string;
    txRef: string;
}

export interface IValidateOtpPayload {
    ref: string;
    otp: string;
}

export interface IRefundPayload {
    ref: string;
    amount: string;
}

export interface IPayWithCardData {
    id: number;
    txRef: string;
    flwRef: string;
    deviceFingerprint: string;
    amount: number;
    chargedAmount: number;
    appFee: number;
    merchantFee: number;
    processorResponse: string;
    authModel: string;
    currency: string;
    ip: string;
    narration: string ;
    status: string | null;
    authUrl: string;
    paymentType: string;
    plan: string;
    fraudStatus: string;
    chargeType: string;
    createdAt: string;
    accountId: number;
    customer: {
        id: number;
        phoneNumber: string;
        name: string;
        email: string;
        createdAt: string;
    };
    card: {
        first6digits: number;
        last4digits: number;
        issuer: string;
        country: string;
        type: string;
        expiry: string;
        token: string;
    },
    meta: any;
}
