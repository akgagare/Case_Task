const express = require('express');
const cors = require('cors');
const generatePdf = require('../controllers/pdfGenerator.js');
const router = express.Router();
const CaseDetails = require('../models/case_model.js');

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

router.route('/api/cases/export/:id').get(async (req, res) => {
  const cas = await CaseDetails.findOne({ caseCode: req.params.id });
  console.log('Hello World in the export functionality');
  const resp = generatePdf(cas);
  if (!resp.ok) {
    throw console.error(resp.message);
  }
  res.json({ message: resp.message });
});

module.exports = router;
