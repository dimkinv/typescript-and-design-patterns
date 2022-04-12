import { GmailAdapter } from "../../Solutions/Adapter/gmail-adapter";
import { EmailClient } from "./email-client";
import { GmailClient } from "./Gmail/gmail-client";
import { YahooClient } from "./Yahoo/yahoo-client";

const client = new EmailClient();
client.addProvider(new YahooClient());
client.downloadEmails();

//this will not work! 
// you need to create an adapter that will impletment the EmailProvider interface and will call the GmailClient methods.
// client.addProvider(new GmailClient());