import React from 'react'

const ResetButton = () => {
  return (
    <div className='flex flex-col items-center'>
         <button type='reset' className='p-1 border-gray-700 mt-4 mb-3 border-2 px-4 rounded-md transition ease-in delay-75 cursor-pointer bg-black text-white hover:bg-slate-300 hover:text-black hover:transition hover:ease-in hover:delay-75 outline-none'>reset score</button>
    </div>
  )
}

export default ResetButton