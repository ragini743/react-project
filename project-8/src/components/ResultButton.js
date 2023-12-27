import React from 'react'

const ResultButton = () => {
  return (
    <div  className='flex flex-col items-center'>
           <button type='submit' className='border-gray-700 mt-2 p-1 mb-3 border-2 px-4 rounded-md transition ease-in delay-75 cursor-pointer bg-black text-white hover:bg-slate-300 hover:text-black hover:transition hover:ease-in hover:delay-75 outline-none'>show results</button>
    </div>
  )
}

export default ResultButton