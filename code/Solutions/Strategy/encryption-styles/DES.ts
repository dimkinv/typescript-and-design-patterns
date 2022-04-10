import { EncryptionAlgorithm } from "../interfaces/encryption-algorithm";

export class DES implements EncryptionAlgorithm {
  encrypt(message: string) {
    const encryptMessge = message.split("").reverse().join("");
    console.log("Encrypting message using DES");
    return encryptMessge;
  }
}
