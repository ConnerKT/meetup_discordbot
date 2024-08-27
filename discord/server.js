const { Client, Events} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    intents: []});

client.login(process.env.DISCORD_TOKEN);