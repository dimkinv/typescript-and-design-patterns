import { EncryptionAlgorithm } from "../interfaces/encryption-algorithm";

export class DES implements EncryptionAlgorithm {
  encrypt(messge: string) {
    const encryptMessge = this.reverseString(messge);
    console.log("Encrypting message using DES");
    return encryptMessge;
  }

  private reverseString(str: string) {
    let splitString = str.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");

    return joinArray;
  }
}
