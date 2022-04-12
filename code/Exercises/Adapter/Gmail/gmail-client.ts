// This is the traget
export class GmailClient {
  public connect(): void {
    console.log("Connecting to Gmail");
  }

  public getEmails(): void {
    console.log("Downloading emails from Gmail");
  }

  public disconnect(): void {
    console.log("Disconnecting from Gmail");
  }
}
