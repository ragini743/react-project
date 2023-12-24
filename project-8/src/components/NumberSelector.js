import React from 'react'

const NumberSelector = () => {
    const number=[1,2,3,4,5,6] ; 
  return (
    <div className='flex justify-evenly flex-wrap  md:w-[50%]'>
{number.map((value) =>(
<div key={value} className='border-2 border-black mt-2 px-6 h-[50px] py-3 font-bold'>{value}</div>
    ))}
    </div>
  )
}

export default NumberSelector