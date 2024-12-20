const ViewDashBoard = () => {
  const caseData = JSON.parse(localStorage.getItem('caseItem'));
  return (
    <div className="mt-20 rounded-lg bg-white h-full w-[80%] p-8 shadow-lg mx-auto border border-gray-200">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Case Dashboard
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600">Case Code</h2>
          <p className="text-lg text-gray-700 mt-2">
            {caseData?.caseCode || 'N/A'}
          </p>
          <hr className="mt-4 border-t border-gray-300" />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600">Claimant Name</h2>
          <p className="text-lg text-gray-700 mt-2">
            {caseData?.claimantName || 'N/A'}
          </p>
          <hr className="mt-4 border-t border-gray-300" />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600">Claim Amount</h2>
          <p className="text-lg text-gray-700 mt-2">
            {caseData?.claimAmount || 'N/A'}
          </p>
          <hr className="mt-4 border-t border-gray-300" />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-600">Status</h2>
          <p className="text-lg text-gray-700 mt-2">
            {caseData?.status || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDashBoard;
