const mongoose = require('mongoose');

const caseDB =
  'mongodb+srv://sksonawane34:DXhdE2j1MLRJxYFW@cluster0.rcebf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(caseDB)
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => console.log('no connection'));

module.exports = mongoose;
