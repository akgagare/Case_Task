import { useState, useEffect } from 'react';

const UpdateDashBoard = () => {
  const caseItem = JSON.parse(localStorage.getItem('caseItem'));

  // Initialize state for form fields
  const [caseCode, setCaseCode] = useState(caseItem?.caseCode || '');
  const [claimantName, setClaimantName] = useState(
    caseItem?.claimantName || ''
  );
  const [claimAmount, setClaimAmount] = useState(caseItem?.claimAmount || '');
  const [hospitalName, setHospitalName] = useState(
    caseItem?.hospitalName || ''
  );
  const [doctorName, setDoctorName] = useState(caseItem?.doctorName || '');
  const [status, setStatus] = useState(caseItem?.status || 'Pending');

  // Update state if caseItem changes (useEffect)
  useEffect(() => {
    if (caseItem) {
      setCaseCode(caseItem.caseCode);
      setClaimantName(caseItem.claimantName);
      setClaimAmount(caseItem.claimAmount);
      setHospitalName(caseItem.hospitalName);
      setDoctorName(caseItem.doctorName);
      setStatus(caseItem.status);
    }
  }, []);

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
      const response = await fetch(
        `http://localhost:5000/api/updateCase/${caseItem.caseCode}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        }
      );

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
  if (!caseItem) {
    return <div>No case data available</div>;
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[30rem] lg:w-[40rem]  items-center justify-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create/Update Case
        </h2>

        <div className="mb-4">
          <label
            htmlFor="caseCode"
            className="block text-sm font-medium text-gray-700"
          >
            Case Code
          </label>
          <input
            type="text"
            id="caseCode"
            value={caseCode}
            onChange={(e) => setCaseCode(e.target.value)}
            required
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="claimantName"
            className="block text-sm font-medium text-gray-700"
          >
            Claimant Name
          </label>
          <input
            type="text"
            id="claimantName"
            required
            value={claimantName}
            onChange={(e) => setClaimantName(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="claimAmount"
            className="block text-sm font-medium text-gray-700"
          >
            Claim Amount
          </label>
          <input
            type="number"
            id="claimAmount"
            required
            value={claimAmount}
            onChange={(e) => setClaimAmount(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="hospitalName"
            className="block text-sm font-medium text-gray-700"
          >
            Hospital Name
          </label>
          <input
            type="text"
            id="hospitalName"
            value={hospitalName}
            required
            onChange={(e) => {
              setHospitalName(e.target.value);
            }}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="doctorName"
            className="block text-sm font-medium text-gray-700"
          >
            Doctor Name
          </label>
          <input
            type="text"
            id="doctorName"
            required
            value={doctorName}
            onChange={(e) => {
              setDoctorName(e.target.value);
            }}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateDashBoard;
