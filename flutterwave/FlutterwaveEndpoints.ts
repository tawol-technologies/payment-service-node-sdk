/* eslint-disable no-unused-vars */
export enum FlutterwaveEndPointEnum {
    BASE_URL = 'https://api.flutterwave.com/v3',
    CARD_CHARGE = '/charges?type=card',
    VALIDATE_CHARGE = '/validate-charge',
    TOKENIZED_CHARGE = '/tokenized-charges',
    TRANSACTION = '/transactions',
    VERIFY_TX_ID = '',
    VERIFY_TX_REF = '',
    REFUND = '',
}
