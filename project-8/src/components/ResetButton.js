import React from 'react'

const ResetButton = ({resetScore}) => {
  return (
    <div className='flex flex-col items-center'>
         <button type='reset' className='p-1 mt-4 mb-3 border-2 border-slate-600 border-solid px-4 rounded-md duration-150 transition ease-in  delay-75 cursor-pointer bg-white text-black hover:bg-black hover:text-white hover:transition hover:ease-in hover:delay-75 hover:duration-175 outline-none' onClick={resetScore}>reset score</button>
    </div>
  )
}

export default ResetButton