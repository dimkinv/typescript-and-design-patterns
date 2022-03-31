import { EncryptionAlgorithm } from "../interfaces/encryption-algorithm";

export class AES implements EncryptionAlgorithm {
  encrypt(messge: string) {
    const encryptMessage = messge.toLocaleUpperCase();
    console.log("Encrypting message using AES");
    return encryptMessage;
  }
}
