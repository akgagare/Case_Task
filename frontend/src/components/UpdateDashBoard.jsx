import React, { useState, useEffect } from 'react';

const UpdateDashBoard = ({ caseData }) => {
  // Initialize state for form fields
  const [caseCode, setCaseCode] = useState(caseData?.caseCode || '');
  const [claimantName, setClaimantName] = useState(caseData?.claimantName || '');
  const [claimAmount, setClaimAmount] = useState(caseData?.claimAmount || '');
  const [hospitalName, setHospitalName] = useState(caseData?.hospitalName || '');
  const [doctorName, setDoctorName] = useState(caseData?.doctorName || '');
  const [status, setStatus] = useState(caseData?.status || 'Pending');

  // Update state if caseData changes (useEffect)
  useEffect(() => {
    if (caseData) {
      setCaseCode(caseData.caseCode);
      setClaimantName(caseData.claimantName);
      setClaimAmount(caseData.claimAmount);
      setHospitalName(caseData.hospitalName);
      setDoctorName(caseData.doctorName);
      setStatus(caseData.status);
    }
  }, [caseData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      caseCode,
      claimantName,
      claimAmount,
      hospitalName,
      doctorName,
      status,
    };

    try {
      // Send the update request to the server
      const response = await fetch(`http://localhost:5000/updateCase/${caseData.caseCode}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log('Case updated successfully!');
        // You can add additional logic here like closing the form, showing a success message, etc.
      } else {
        console.error('Failed to update case');
      }
    } catch (error) {
      console.error('Error updating case:', error);
    }
  };

  // If no case data is provided, show a message
  if (!caseData) {
    return <div>No case data available</div>;
  }
  return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <form className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[30rem] lg:w-[40rem]  items-center justify-center">
                <h2 className="text-2xl font-semibold mb-6 text-center">Create/Update Case</h2>

                <div className="mb-4">
                <label htmlFor="caseCode" className="block text-sm font-medium text-gray-700">Case Code</label>
                <input
                    type="text"
                    id="caseCode"
                    value={caseData.caseCode}
                    onChange={(e) => setCaseCode(e.target.value)}
                    required
                    className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div className="mb-4">
                <label htmlFor="claimantName" className="block text-sm font-medium text-gray-700">Claimant Name</label>
                <input
                    type="text"
                    id="claimantName"
                    required
                    value={caseData.claimantName}
                    onChange={(e)=>setClaimantName(e.target.value)}
                    className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div className="mb-4">
                <label htmlFor="claimAmount" className="block text-sm font-medium text-gray-700">Claim Amount</label>
                <input
                    type="number"
                    id="claimAmount"
                    required
                    value={caseData.claimAmount}
                    onChange={(e)=>setClaimAmount(e.target.value)}
                    className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div className="mb-4">
                <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700">Hospital Name</label>
                <input
                    type="text"
                    id="hospitalName"
                    value={caseData.hospitalName}
                    required
                    onChange={(e)=>{setHospitalName(e.target.value)}}
                    className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div className="mb-4">
                <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor Name</label>
                <input
                    type="text"
                    id="doctorName"
                    required
                    value={caseData.doctorName}
                    onChange={(e)=>{setDoctorName(e.target.value)}}
                    className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

                <div className="mb-6">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    id="status"
                    value={caseData.status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onSubmit={handleSubmit}
                >
                        Submit
                </button>
            </form>
        </div>
  )
}

export default UpdateDashBoard
