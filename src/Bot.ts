import { constants } from "buffer";
import { Client, ClientOptions } from "discord.js";
import { TOKEN } from './const/constants';

console.log("Bot is starting...");

const client = new Client({
    intents: []
});
client.login(TOKEN);

console.log(client);