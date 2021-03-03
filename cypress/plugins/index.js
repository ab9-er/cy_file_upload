const cucumber = require('cypress-cucumber-preprocessor').default;
require('dotenv').config()


module.exports = (on, config) => {
  config.env.receiver_email = process.env.RECEIVER_EMAIL;
  config.env.sender_email = process.env.SENDER_EMAIL;
  config.env.sender_message = process.env.SENDER_MESSAGE;
  on('file:preprocessor', cucumber());
  return config
};
