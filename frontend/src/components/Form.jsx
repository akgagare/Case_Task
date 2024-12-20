import { useState } from 'react';
const Form = () => {
  const [caseCode, setCaseCode] = useState('');
  const [claimantName, setClaimantName] = useState('');
  const [claimAmount, setClaimAmount] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Hello World');
    // Construct the form data object
    const formData = {
      caseCode,
      claimantName,
      claimAmount,
      hospitalName,
      doctorName,
      status,
    };

    // Log the form data to the console
    console.log('The form data ----- >>>> ', formData);

    // Send the form data via POST request to the Express API
    try {
      const response = await fetch('http://localhost:5000/api/cases', {
        method: 'POST', // HTTP method
        headers: {
          'Content-Type': 'application/json', // Sending data in JSON format
        },
        body: JSON.stringify(formData), // Stringify the form data object
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json(); // Parse the response
        console.log('Data from API:', data);
        // Handle the response (like showing a success message)
      } else {
        console.error('Error: Unable to submit the form data');
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
    }
  };
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

export default Form;
