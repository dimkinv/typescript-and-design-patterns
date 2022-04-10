import { ChatClient } from "./chat-client";

const chatClient1 = new ChatClient('AES');
chatClient1.send("Hello!");
chatClient1.send("my name is Asaf!");

console.log("");

const chatClient2 = new ChatClient('DES');
chatClient2.send("Hello!");
chatClient2.send("my name is Asaf!");