import React from 'react'
import UserData from './UserData'

const Contact = () => {
  return (
    <div className="relative top-28 p-4 sm:top-36 md:top-[170px] md:leading-10 md:tracking-widest lg:top-[200px] md:[60%] mx-auto">
        <h1 className='font-extrabold text-4xl md:text-6xl'>
            CONTACT US
        </h1>
        <p className='mt-4 md:text-xl md:mt-6'>LET US CONNECT: WE ARE HERE TO HELP, AND WE HAD LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        <UserData />
    </div>
  )
}

export default Contact