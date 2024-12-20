const express = require('express');
const cors = require('cors');  // Import CORS to allow cross-origin requests

const app = express();

// Use CORS middleware to handle cross-origin requests
app.use(cors());

// Dummy case data (as you provided earlier)
const cases = [
  { caseCode: '003', claimantName: 'Mukesh Patel', claimAmount: 40000, status: 'Done', action: 'Completed' },
  { caseCode: '004', claimantName: 'John Doe', claimAmount: 25000, status: 'Pending', action: 'In Progress' },
  { caseCode: '005', claimantName: 'Sara Lee', claimAmount: 50000, status: 'In Progress', action: 'Pending' },
  { caseCode: '006', claimantName: 'David Smith', claimAmount: 10000, status: 'Done', action: 'Completed' },
  { caseCode: '007', claimantName: 'Laura Johnson', claimAmount: 15000, status: 'In Progress', action: 'Pending' },
  { caseCode: '008', claimantName: 'Michael Brown', claimAmount: 35000, status: 'Done', action: 'Completed' },
  { caseCode: '009', claimantName: 'Emily Davis', claimAmount: 27000, status: 'Pending', action: 'In Progress' },
  { caseCode: '010', claimantName: 'James Wilson', claimAmount: 45000, status: 'In Progress', action: 'Pending' },
  { caseCode: '011', claimantName: 'Olivia Martinez', claimAmount: 55000, status: 'Done', action: 'Completed' },
  { caseCode: '012', claimantName: 'Daniel Thomas', claimAmount: 30000, status: 'Pending', action: 'In Progress' }
];

// Create the GET endpoint to return the cases data
app.get('/api/cases', (req, res) => {
  // You could retrieve data from a database here, but for now, we use dummy data
  console.log(cases);
  return res.json(cases);  // Respond with the case data as JSON
});
app.get('/getCase/:id',(req,res)=>{
  //This is VIEW api
})

// Start the Express server on port 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
