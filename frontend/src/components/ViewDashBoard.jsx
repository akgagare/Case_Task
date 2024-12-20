import React from 'react'

const ViewDashBoard = ({CaseData}) => {
  return (
    <div className='mt-20 rounded-md  bg-pink-500 h-full w-[80%] p-6 pl-6 shadow-[0_35px_60px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.04)]
'>
        <div className='mb-4'>
            <h2 className='text-3xl'>Case Code</h2>
            <h4>{CaseData.caseCode}</h4>
            <hr className='h-1 bg-gray-950 mb-4'></hr>
            <h2 className='text-3xl'>Claimant Name</h2>
            <hr className='h-1 bg-gray-950 mb-4'></hr>
            <h2 className='text-3xl'>Claim Amount</h2>
            <hr className='h-1 bg-gray-950 mb-4'></hr>
            <h2 className='text-3xl'>Status</h2>
        </div>
    </div>
  )
}

export default ViewDashBoard
