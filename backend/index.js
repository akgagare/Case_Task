const express = require('express');
const generatePdf = require('./pdfGenerator.js');
const app = express();
const port = 5000;
app.use(express.static('reports'));
app.get('/', (req, res) => {
  const resp = generatePdf('Aom');
  if (!resp.ok) {
    throw console.error(resp.message);
  }
  res.json({ message: resp.message });
});

app.listen(port, () => {
  console.log(`App Listening on ${port}`);
});
