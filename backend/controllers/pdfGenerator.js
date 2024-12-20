const PDFDocument = require('pdfkit');
const fs = require('fs');

const generatePdf = (reportData) => {
  if (!reportData) {
    return { ok: false, message: 'Pls enter non null value in the argument' };
  }
  // const reportData = {
  //   caseCode: 'ABC123',
  //   task: 'Task 2',
  //   claimantName: 'John Doe',
  //   claimAmount: '$5000',
  //   hospitalName: 'General Hospital',
  //   doctorName: 'Dr. Smith',
  //   status: 'Pending',
  //   createdDate: '2024-12-20',
  //   updatedDate: '2024-12-21',
  // };
  const {
    caseCode,
    claimantName,
    claimAmount,
    hospitalName,
    doctorName,
    status,
    createdDate,
    updatedDate,
  } = reportData;
  try {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(`./reports/${caseCode}.pdf`));
    doc.fontSize(25).text('Case Report', { align: 'center' }).moveDown(2);

    // Format the report
    doc
      .fontSize(14)
      .text(`Case Code: ${caseCode}`, { align: 'left' })
      .moveDown(0.5)
      .text(`Claimant Name: ${claimantName}`)
      .moveDown(0.5)
      .text(`Claim Amount: ${claimAmount}`)
      .moveDown(0.5)
      .text(`Hospital Name: ${hospitalName || 'N/A'}`)
      .moveDown(0.5)
      .text(`Doctor Name: ${doctorName || 'N/A'}`)
      .moveDown(0.5)
      .text(`Status: ${status}`)
      .moveDown(0.5)
      .text(`Created Date: ${createdDate}`)
      .moveDown(2);

    doc.end();
    return {
      ok: true,
      message:
        'Pdf Generated Successfully in the report folder with the name same as the code',
    };
  } catch (err) {
    return {
      ok: false,
      message: err.message,
    };
  }
};

module.exports = generatePdf;
