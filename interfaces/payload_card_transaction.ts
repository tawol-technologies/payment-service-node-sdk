export interface IPayWithCardPayload {
    card_number?: string;

}

export interface IPayWithSavedCardPayload {
    token: string;
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
    transactionRef: string;
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
    },
    meta: {
        authorization: {
            mode: string;
            endpoint: string;
        }
    }
}
