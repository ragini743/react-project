import React from 'react'

const RollToDice = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-2'>
        <img src="/dice_1.png" className='w-[70%] m-auto' alt="dice-1"></img>
      </div>
      <p> click on Dice to roll</p>
      <button type='reset' className='border-2 px-9 rounded-lg border-gray-700 mt-4 mb-3'>reset score</button>
      <button type='submit' className='border-2 rounded-lg border-gray-700 px-8 mb-8'>show results</button>
    </div>
  )
}

export default RollToDice