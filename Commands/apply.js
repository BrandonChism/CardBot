
const fs = require('fs')

const Dynamo = require('../dynamo.js')

module.exports = {
    command: "cash",


    fn: async (msg) => {
        
        const res = await Dynamo.update({
            primaryKey: 'id',
            primaryKeyValue: msg.author.id,
            updateKey: 'cash',
            addValue: 10
        })
        
        console.log('dynamodb has updated?')

        if(res){
            msg.reply(`Your new balance is ${res.Attributes.cash}!`); // You got a result of the NEW updated cash. Promise was returned.
        }
    }
    
}