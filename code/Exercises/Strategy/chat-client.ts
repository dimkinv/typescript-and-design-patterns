class ChatClient {
  constructor(private encryptionAlgorithm: string) {}

  send(message: string): void {
    if (this.encryptionAlgorithm == "DES")
      console.log("Encrypting message using DES");
    else if (this.encryptionAlgorithm == "AES")
      console.log("Encrypting message using AES");
    else throw new Error("Unsupported encryption algorithm");

    console.log("Sending the encrypted message...");
  }
}
