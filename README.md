# payment-service-node-sdk
This is to provides methods to manage payments through popular payment processors (Flutterwave, Paystack, Remita) easily.
It is an HOC of each payment processor SDK

## Implementation Sample
### Assume you clone this repo to services folder which is directly in src folder.

```
import {getEnv} from '.';
import {CurrencyEnum} from '../services/payment_service/enums/CurrencyEnum';
import {
  CountryCodeEnum,
  PaymentGatewayEnum,
} from '../services/payment_service/interfaces/config';
import PaymentProcessor from '../services/payment_service/PaymentProcessor';
import {AppConfigs} from './app';

const config = {
  PUB_KEY: getEnv('PUB_KEY'),
  SEC_KEY: getEnv('SEC_KEY'),
  ENC_KEY: getEnv('ENC_KEY'),
};

export const paymentProcessor = new PaymentProcessor({
  secretKey: config.SEC_KEY,
  publicKey: config.PUB_KEY,
  encryptionKey: config.ENC_KEY,
  gateway: PaymentGatewayEnum.FLUTTERWAVE,
  countryCode: CountryCodeEnum.NIGERIA,
  currency: CurrencyEnum.NIGERIA,
}).processor;

```
