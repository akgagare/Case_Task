const Case = require('../models/case_model');

const createnewcase = async (req, res, next) => {
  try {
    const cases = new Case({
      caseCode: req.body.caseCode,
      claimantName: req.body.claimantName,
      claimAmount: req.body.claimAmount,
      hospitalName: req.body.hospitalName,
      doctorName: req.body.doctorName,
      status: req.body.status,
      createdDate: req.body.createdDate,
      updatedDate: req.body.updatedDate,
    });

    await cases.save();
    console.log('Done Saved');
    console.log(cases);
    res.send('Successfully created user');
  } catch (error) {
    console.log(error);
    console.log(cases);
    res.status(201).send(error.message);
  }
};

const getallcases = async (req, res) => {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatecase = async (req, res) => {
  const { id } = req.params;
  const updatedCase = req.body;
  try {
    const updatedEntry = await Case.findOneAndUpdate(
      { caseCode: id },
      updatedCase,
      {
        new: true,
      }
    );

    if (!updatedEntry) {
      return res.status(404).send('Entry not found');
    }
    console.log('Success');
    res.json(updatedEntry);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = { createnewcase, getallcases, updatecase };
