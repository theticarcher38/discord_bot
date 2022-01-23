require('dotenv').config();

const { Client, Intents } = require('discord.js');
const token = process.env.TOKEN;
const rdymsg = require('./readymsg.json');
const rdy_msg = rdymsg.rdy_msg[Math.floor(Math.random() * rdymsg.rdy_msg.length)];

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log(`${client.user.username} ${rdy_msg}`);
});

client.login(token);