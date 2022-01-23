const { readdirSync } = require('fs');
require('dotenv').config();

const { Client, Intents } = require('discord.js');
const token = process.env.TOKEN;
const rdymsg = require('./json/readymsg.json');
const rdy_msg = rdymsg.rdy_msg[Math.floor(Math.random() * rdymsg.rdy_msg.length)];

const client = new Client({ 
		intents: [Intents.FLAGS.GUILDS] 
	});

client.once('ready', () => {
	console.log(`${client.user.username} ${rdy_msg}`);
});

client.once('message', () => {

	readdirSync('./commands/').forEach(dir => {
		const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'))

		for (let file of commands) {
			let command = require(`../commands/${dir}/${file}`);
		}
	})
})

client.login(token);