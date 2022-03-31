import { EncryptionAlgorithm } from "./interfaces/encryption-algorithm";

export class ChatClient {
  private _encryptionAlgorithm: EncryptionAlgorithm;

  constructor(encryptionAlgorithm: EncryptionAlgorithm) {
    this._encryptionAlgorithm = encryptionAlgorithm;
  }

  send(message: string): void {

    const encryptMessage = this._encryptionAlgorithm.encrypt(message);
    console.log("Sending the encrypted message... ", encryptMessage);
  }
}
