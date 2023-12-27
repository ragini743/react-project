import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector';
import RollToDice from './RollToDice';

const Body = () => {
  return (
    <div>
    <div className='flex items-center p-5 md:p-10 flex-col md:flex-row md:justify-evenly md:items-baseline'>
        <TotalScore />
        <NumberSelector />
        </div>
        <RollToDice />
    </div>
  )
}

export default Body