import { EmailProvider } from "../email-provider";

export class YahooClient implements EmailProvider {
  downloadEmails(): void {
    console.log("Downloading emails from Yahoo");
  }

}
