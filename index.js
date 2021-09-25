const Discord = require('discord.js');

const Client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES","DIRECT_MESSAGES","GUILD_MESSAGE_REACTIONS"]});

require('dotenv').config();




Client.once('ready', () => {
    console.log("I am online");
})






Client.login(process.env.DISCORD_BOT_TOKEN);
