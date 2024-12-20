const express = require('express');
const routes = require('./Routes/routes.js');
const app = express();
const port = 5000;
app.use(express.static('reports'));
app.use(express.json());
require('./db/conn.js')

app.use("/",routes)

app.listen(port, () => {
  console.log(`App Listening on ${port}`);
});
