import { constants } from "buffer";
import { Client, ClientOptions } from "discord.js";
//import { TOKEN } from './const/constants';
import ready from "./listeners/ready";
import * as dotenv from 'dotenv';

console.log("Bot is starting...");
dotenv.config();

const client = new Client({
    intents: []
});
ready(client);

client.login(process.env.BOT_AUTH_TOKEN);

console.log(client);