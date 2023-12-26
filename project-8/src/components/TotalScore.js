import React from 'react'
import NumberSelector from './NumberSelector'
import RollToDice from './RollToDice'

const TotalScore = () => {
  return (
    <div>
    <div className='p-5 md:p-10 flex flex-col md:flex-row md:justify-between'>
        <div className='mb-9 md:w-[30%] flex flex-col justify-center items-center'>
        <span className=' mx-auto border-2 border-black 
        px-6 py-2 md:px-9 md:py-6 md:inline text-4xl md:text-6xl font-bold'>0</span>
        <h1 className='mt-5'>Total Score</h1>
        </div>
            <NumberSelector />
     
    </div>
    <p className='text-right  pr-8 font-bold text-xl md:-mt-32 md:text-2xl md:pr-20'>select Number</p>
    <RollToDice />
    </div>
  )
}

export default TotalScore