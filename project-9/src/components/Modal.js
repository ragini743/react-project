import React from 'react'

const Modal = ({open, onClose , }) => {
  return (
    <div className=' '>
      <div className= 'absolute bg-white rounded-md z-50 top-24 right-10 left-10  shadow-white shadow-md '>
        <div className=' flex justify-end mr-4'>
            <img src = "https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt='cross-icon'className='w-[8%]' onClick={onClose}>
            </img>
        </div>
        <div className='flex flex-col m-auto w-[80%] mx-auto'>
        <label for="name" className='flex flex-col mb-2 '> Name
        <input type='text'className='border-2 border-black shadow-md rounded-sm pl-4 p-1'></input>
         </label>
           
        <label for = "email" className='flex flex-col mb-4'>Email
        <input type='Email' className='border-2 border-black rounded-sm pl-4 p-1 shadow-md
        '></input>
        </label>
        </div>
      </div> 
      <div className='backdrop-blur-sm h-full w-full absolute top-20 bottom-0 opacity-80 left-0'>
        </div>       
    </div>
  )
}

export default Modal