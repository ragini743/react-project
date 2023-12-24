import React from 'react'
import NumberSelector from './NumberSelector'

const TotalScore = () => {
  return (
    <div className='p-5 md:p-10 flex flex-col md:flex-row md:justify-between'>
        <div className='mb-9 md:w-[30%] flex flex-col justify-center items-center'>
        <span className=' mx-auto border-2 border-black 
        px-3 py-1 md:px-6 md:py-2 md:inline text-4xl font-bold'>0</span>
        <h1 className='mt-5'>Total Score</h1>
        </div>
            <NumberSelector />
     
    </div>
  )
}

export default TotalScore