import React from 'react'

const ResultButton = () => {
  return (
    <div  className='flex flex-col items-center'>
           <button type='submit' className='p-1 mt-2 mb-3 border-2 border-slate-600 border-solid px-4 rounded-md transition ease-in duration-150 delay-100 cursor-pointer bg-white text-black hover:bg-black hover:text-white hover:duration-175 hover:transition hover:ease-in hover:delay-75 outline-none'>show results</button>
    </div>
  )
}

export default ResultButton