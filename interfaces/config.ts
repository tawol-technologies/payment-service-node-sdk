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

export enum CaseType {
    SNAKE_CASE,
    CAMEL_CASE
}

export interface IConfig {
    secretKey: string;
    publicKey: string;
    encryptionKey: string;
    currency: string;
    countryCode: string;
    gateway: PaymentGatewayEnum;
}
