import forge from 'node-forge';

export default class Flutterwave3DES {
  encriptionKey: string;
  constructor(enc: string) {
    this.encriptionKey = enc;
  }


  static doEncryption(encryptionKey: string, payload: any) {
    const text = JSON.stringify(payload);
    const cipher = forge.cipher.createCipher(
        '3DES-ECB',
        forge.util.createBuffer(encryptionKey)
    );
    cipher.start({iv: ''});
    cipher.update(forge.util.createBuffer(text, 'utf8'));
    cipher.finish();
    const encrypted = cipher.output;
    return forge.util.encode64(encrypted.getBytes());
  }

  public encrypt(payload: any) {
    return Flutterwave3DES.doEncryption(this.encriptionKey, payload);
  }
}
