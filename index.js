const Discord = require('discord.js');

const Client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES","DIRECT_MESSAGES","GUILD_MESSAGE_REACTIONS"]});






Client.once('ready', () => {
    console.log("I am online");
})






Client.login('ODkxMTA0NTQ3Mzk1NzYwMTI4.YU5fyA.3LdcV8zR7FP8PABvsC1vxkiSfxQ');
