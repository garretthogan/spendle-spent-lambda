const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context) {
  const searchParams = {
    TableName: 'spendle-user-data',
  };

  dynamoDB.scan(searchParams).promise().then(res => {
    // to do:
    // calculate each users money spent this month
    context.succeed({message: 'Success'});
  }).catch(error => context.fail(error));
}
