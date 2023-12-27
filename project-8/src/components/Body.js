import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector';
import RollToDice from './RollToDice';
import { useState } from 'react';
import ResetButton from './ResetButton';
import ResultButton from './ResultButton';
const Body = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  console.log('selected',selectedNumber)
  const [score,setScore] = useState(0) ;
  const [currentDIce , setCurrentDice] = useState(1);
  const [error,setError] = useState("")
  const generateRandomNumber = (min ,max) =>{
    return Math.floor(Math.random() * (max - min) + min) ;
  } ;
  const roleDice = () =>{
    if(!selectedNumber) {
      setError("you have not selected any number") ;
      return;
    };
    // setError("")
    const randomNumber = generateRandomNumber(1,7) ;
    setCurrentDice(randomNumber) ;
    if (selectedNumber ===randomNumber){
      setScore(score+randomNumber)
      
    } else{
        setScore(score-2);
        // setScore((pre) => pre-2)
      }
      setSelectedNumber(undefined) ;
    }
  
  return (
    <div>
    <div className='flex items-center p-5 md:p-10 flex-col md:flex-row md:justify-evenly md:items-baseline'>
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
        <RollToDice currentDIce={currentDIce} setCurrentDice={setCurrentDice} roleDice={roleDice} />
        <ResetButton />
        <ResultButton />
    </div>
  )
}

export default Body