import { EncryptionAlgorithm } from "../interfaces/encryption-algorithm";

export class DES implements EncryptionAlgorithm {
  encrypt(message: string) {
    const encryptMessage = message.split("").reverse().join("");
    console.log("Encrypting message using DES");
    return encryptMessage;
  }
}
