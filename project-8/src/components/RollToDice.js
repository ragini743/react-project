import React from 'react'

const RollToDice = ({currentDIce,setCurrentDice,roleDice}) => {
  // const [currentDIce , setCurrentDice] = useState(1);
  console.log("currentDIce" , currentDIce) ;
 
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-2' onClick={
        roleDice
      }>
        <img src={`/dice_${currentDIce}.png`} className='w-[70%] m-auto cursor-pointer' alt="dice-1"></img>
      </div>
      <p> click on Dice to roll</p>
 
   
    </div>
  )
}

export default RollToDice