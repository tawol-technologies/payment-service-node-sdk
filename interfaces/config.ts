/* eslint-disable no-unused-vars */
export enum PaymentGatewayEnum {
    FLUTTERWAVE,
    PAYSTACK,
    REMITA,
}

export enum CountryCodeEnum {
    NIGERIA='NG',
    ZIMBABWE='ZAM'
}

export interface IConfig {
    secretKey: string;
    publicKey: string;
    encryptionKey: string;
    currency: string;
    countryCode: string;
    gateway: PaymentGatewayEnum;
}
