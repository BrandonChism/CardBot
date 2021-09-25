module.exports = {
    command: "profile",
    fn: async (msg) => {

        let args = msg.content.split(" ")

        try{
            if(!args[1]) throw "you must provide an profile name or Discord ID";

            msg.reply(`${args[1]} profile:`)

            console.log("your profile here")
        }
        catch(err)
        {
            msg.reply(err)
            console.log(err)
        }
    },
}