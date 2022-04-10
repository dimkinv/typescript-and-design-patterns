import { EncryptionAlgorithm } from "../interfaces/encryption-algorithm";

export class AES implements EncryptionAlgorithm {
  encrypt(message: string) {
    const encryptMessage = message.toLocaleUpperCase();
    console.log("Encrypting message using AES");
    return encryptMessage;
  }
}
