import { EmailProvider } from "./email-provider";
import { GmailClient } from "./Gmail/gmail-client";

export class GmailAdapter implements EmailProvider {
  private client = new GmailClient();

  downloadEmails(): void {
    this.client.connect();
    this.client.getEmails();
    this.client.disconnect();
  }
}
