import { EmailProvider } from "./email-provider";

export class EmailClient {
    private  providers = [];
  
     addProvider(provider: EmailProvider): void {
      this.providers.push(provider);
    }
  
    downloadEmails(): void {
        this.providers.forEach((provider)=> provider.downloadEmails())
    }
  }
  