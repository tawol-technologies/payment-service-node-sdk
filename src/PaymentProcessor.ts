import Flutterwave from '../flutterwave/Flutterwave';
import {IProcessorOperations} from '../interfaces';
import {IConfig, PaymentGatewayEnum} from '../interfaces/config';
import Paystack from '../paystack/Paystack';

export default class {
  config: IConfig;
  processor: IProcessorOperations;

  constructor(config: IConfig) {
    this.config = config;
    switch (config.gateway) {
      case PaymentGatewayEnum.FLUTTERWAVE:
        this.processor = new Flutterwave(config);
        break;
      case PaymentGatewayEnum.PAYSTACK:
        this.processor = new Paystack(config);
        break;
      case PaymentGatewayEnum.REMITA:
        throw new Error('Remita is coming soon');
      default:
        throw new Error(`Payment gateway must be among ${Object.values(PaymentGatewayEnum)}`);
    }
  }
}
