const mongoose = require('mongoose');

const caseDB = process.env.mongoURL;

mongoose
  .connect(caseDB)
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => console.log('no connection'));

module.exports = mongoose;
