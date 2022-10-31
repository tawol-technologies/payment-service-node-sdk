import {IOtpManagerOperations, IPPResponse} from '../interfaces';
import {IValidateOtpPayload} from '../interfaces/payload_card_transaction';
import {ISendOtpPayload} from '../interfaces/payload_otp';

export default class PaystackOtpManager implements IOtpManagerOperations {
  sendOtp(payload: ISendOtpPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
  validateOtp(payload: IValidateOtpPayload): IPPResponse {
    throw new Error('Method not implemented.');
  }
}
