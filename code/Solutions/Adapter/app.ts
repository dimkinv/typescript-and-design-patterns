import { YahooClient } from "../../Exercises/Adapter/Yahoo/yahoo-client";
import { EmailClient } from "./email-client";
import { GmailAdapter } from "./gmail-adapter";

const client = new EmailClient();
client.addProvider(new GmailAdapter());
client.addProvider(new YahooClient());
client.downloadEmails();