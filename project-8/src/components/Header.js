import React from 'react'
import { DiceImg } from '../Constant'
const Header = () => {
  return (
    <div className='h-full flex'>
        <img src={DiceImg} alt="Dice" className='h-full w-[70%] object-contain'>

        </img>
        <div className='flex
         justify-center flex-col items-center'>
        <h1 className='text-6xl font-bold mb-4'>DICE GAME</h1>
        <button className='border-black border-2 px-4 rounded-md'>Play now</button>
        </div>
    </div>
  )
}

export default Header