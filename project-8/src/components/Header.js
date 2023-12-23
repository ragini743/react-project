import React from 'react'
import { DiceImg } from '../Constant'
const Header = ({ event }) => {
  return (
    <div className='h-full flex'>
        <img src={DiceImg} alt="Dice" className='h-full w-[70%] object-contain bg-gradient-to-bl from-white to bg-slate-150'>

        </img>
        <div className='flex
         justify-center flex-col items-center'>
        <h1 className='text-6xl font-bold mb-4'>DICE GAME</h1>
        <button onClick={event}   className='border-black border-2 px-4 rounded-md transition ease-in delay-75 cursor-pointer bg-black text-white hover:bg-slate-300 hover:text-black hover:transition hover:ease-in hover:delay-75'>Play now</button>
        </div>
    </div>
  )
}

export default Header