
require('dotenv').config()
const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const docClient = new AWS.DynamoDB.DocumentClient();


const Dynamo = {



    set: async(userId) => {



        return docClient.set(params).promise();
    },

    get: async(UserId) => {
        const params= {
            TableName: ''
        }
    },

    update: async({primaryKey,primaryKeyValue,updateKey,addValue}) => {

        console.log(addValue);

        const params = {
            TableName: process.env.DYNAMO_DB_TABLE, 
            Key: { [primaryKey] : primaryKeyValue},
            UpdateExpression: `ADD ${updateKey} :addValue`,
            ExpressionAttributeValues: {
                ':addValue': addValue
            },
            ReturnValues: "ALL_NEW"
        }


        return docClient.update(params).promise();
    }


}

module.exports = Dynamo;