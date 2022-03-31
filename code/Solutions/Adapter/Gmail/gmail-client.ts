
export class GmailClient {
  connect(): void {
    console.log("Connecting to Gmail");
  }

  getEmails(): void {
    console.log("Downloading emails from Gmail");
  }

  disconnect(): void {
    console.log("Disconnecting from Gmail");
  }
}
