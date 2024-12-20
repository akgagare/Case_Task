const express = require('express');
const routes = require('./Routes/routes.js');
const app = express();
const port = 5000;
app.use(express.static('reports'));
app.get('/generatePdf', (req, res) => {
  const resp = generatePdf('Aom');
  if (!resp.ok) {
    throw console.error(resp.message);
  }
  res.json({ message: resp.message });
});
app.use(express.json());
require('./db/conn.js');

app.use('/', routes);

app.listen(5000, () => {
  console.log(`App Listening on 5000`);
});
