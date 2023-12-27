import React from 'react'
const TotalScore = ({score}) => {
  return (
    <div className=''>
        <div className='mb-9 flex flex-col justify-center items-center'>
        <span className=' mx-auto border-2 border-black 
        px-6 py-2 md:px-9 md:py-6 md:inline text-4xl md:text-6xl font-bold'>{score}</span>
        <h1 className='mt-5'>Total Score</h1>
        </div>   
    </div>

  )
}

export default TotalScore