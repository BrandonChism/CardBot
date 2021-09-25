module.exports = {
    command: "hello",
    fn: (args) => {
        try{
            msg.reply("Hello!");
        }
        catch(err)
        {
            console.log(err)
        }
    },
}