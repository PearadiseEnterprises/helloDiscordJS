import { constants } from "buffer";
import { Client, ClientOptions } from "discord.js";
import { TOKEN } from './const/constants';
import ready from "./listeners/ready";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});
ready(client)
client.login(TOKEN);

console.log(client);