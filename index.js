require('dotenv').config();
const { table } = require('console');
const Discord = require('discord.js');
const fs = require('fs');
const { command } = require('./Commands/hello');
const Client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES","DIRECT_MESSAGES","GUILD_MESSAGE_REACTIONS"]});






const commands = {};

const jsCommandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))


jsCommandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    if(command.command && command.fn){
        commands[command.command] = command.fn
    }
})


let prefix = "!"


Client.once('ready', () => { 
    console.log("I am online");
})






Client.on('message', async msg => {
    if (msg.author.bot){return;}; //If the message that was posted, was posted by a bot return the function.
    if(msg.content.startsWith(prefix)){
        let args = msg.content.split(" ")
        let command = args[0].substring(1,args[0].length)
        if(commands[command]){
            try{
                // if(!args[1]) throw "you must provide another argument";
                // if(isNaN(args[1])) throw "you must provide a number";
                console.log('trying command');
                commands[command](msg)
                return
            }
            catch (err){
                msg.reply(err);
                console.log(err);
            }

        }
    }
    
})



Client.login(process.env.DISCORD_BOT_TOKEN);
