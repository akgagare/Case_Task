const express = require('express');
const cors = require('cors');
const generatePdf = require('../controllers/pdfGenerator.js');
const router = express.Router();

router.use(cors({ allow: 'https://127.0.0.1:5173' }));
const {
  getallcases,
  createnewcase,
  updatecase,
} = require('../controllers/CaseData.js');

router.route('/test').get((req, res) => {
  console.log('Everything is working!');
});

router.route('/api/cases').get(getallcases).post(createnewcase);

router.route('/api/updateCase/:id').put(updatecase);

router.route('/api/cases/export/:id').get((req, res) => {
  const resp = generatePdf('Aom');
  if (!resp.ok) {
    throw console.error(resp.message);
  }
  res.json({ message: resp.message });
});

module.exports = router;
