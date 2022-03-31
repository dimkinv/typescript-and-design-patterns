import { ChatClient } from "./chat-client";
import { AES } from "./encryption-styles/AES";
import { DES } from "./encryption-styles/DES";

const chatClient1 = new ChatClient(new AES());
chatClient1.send("Hello!");
chatClient1.send("my name is Asaf!");

const chatClient2 = new ChatClient(new DES());
chatClient2.send("Hello!");
chatClient2.send("my name is Asaf!");
