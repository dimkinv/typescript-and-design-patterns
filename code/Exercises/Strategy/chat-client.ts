export class ChatClient {
  constructor(private encryptionAlgorithm: string) {}

  send(message: string): void {
    let encryptMessage;
    if (this.encryptionAlgorithm == "DES") {
      console.log("Encrypting message using DES");
      encryptMessage = message.split("").reverse().join("");
    }
    else if (this.encryptionAlgorithm == "AES") {
      console.log("Encrypting message using AES");
      encryptMessage = message.toLocaleUpperCase();
    }
    else throw new Error("Unsupported encryption algorithm");
    console.log("Sending the encrypted message... " + encryptMessage);
  }

}
