import React from 'react'
const TotalScore = ({score , setScore}) => {
  if (score>= 10){
    alert("you are good player") ;
    setScore(0)
  }
  else if(score <= -10){
    alert("you are looser .please reset the score")
    setScore(0)
  }

  return (
    <div className=''>
        <div className='mb-9 flex flex-col justify-center items-center '>
        <span className=' mx-auto  
        px-6 py-2 md:px-9 md:py-4 md:inline text-4xl md:text-9xl font-bold opacity-100 text-black'>{score}</span>
        <h1 className='mt-4'>Total Score</h1>
        </div>   
    </div>

  )
}

export default TotalScore