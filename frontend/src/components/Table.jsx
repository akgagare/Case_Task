import React,{useState,useEffect} from 'react';
import ViewDashBoard from './ViewDashBoard';
const Table = () => {
  // Dummy data to be displayed in the table
  const [cases, setCases] = useState([
    { caseCode: '003', claimantName: 'Mukesh Patel', claimAmount: 40000, status: 'Done', action: 'Completed' },
    { caseCode: '004', claimantName: 'John Doe', claimAmount: 25000, status: 'Pending', action: 'In Progress' },
    { caseCode: '005', claimantName: 'Sara Lee', claimAmount: 50000, status: 'In Progress', action: 'Pending' }
  ]);

  // Fetch case data from the API
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cases'); // Your Express API URL
        if (response.ok) {
          const data = await response.json();
          setCases(data); // Set the case data in the state
        } else {
          console.error('Failed to fetch cases');
        }
      } catch (error) {
        console.error('Error fetching cases:', error);
      }
    };

    fetchCases(); // Call the function to fetch data when the component mounts
  }, []);



  const handleView = async ({id}) => {
    try {
      const response = await fetch(`http://localhost:5000/getCase/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch case data');
      }
      const data = await response.json(); 
      <ViewDashBoard CaseData={selectedCase} />
      
    } catch (error) {
      console.log("Error viewing case:", error);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <table className="min-w-full table-auto bg-white border-collapse shadow-lg rounded-lg">
        <caption className="text-2xl font-semibold text-gray-700 mb-4">Case Details</caption>
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4 border-b">Case Code</th>
            <th className="py-2 px-4 border-b">Claimant Name</th>
            <th className="py-2 px-4 border-b">Claim Amount</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseItem, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{caseItem.caseCode}</td>
              <td className="py-2 px-4 border-b">{caseItem.claimantName}</td>
              <td className="py-2 px-4 border-b">{caseItem.claimAmount}</td>
              <td className="py-2 px-4 border-b">{caseItem.status}</td>
              <td className="py-2 px-4 border-b flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 transition" onClick={()=>handleView(caseItem.caseCode)}>
                  View
                </button>
                <button className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-700 transition">
                  Update
                </button>
                <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700 transition">
                  Export PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
