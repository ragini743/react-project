import React from 'react'
import Form from './Form'
const UserData = () => {
  return (
    <div className='relative top-[50px] sm:top-[100px] px-10 md:flex md:px-4'>
      <div className='md:w-[50%]'>
        <div className='flex '>
        <button type="button" className='text-xs p-2 sm:text-sm md:text-md bg-black flex items-center justify-center text-white mx-4
        rounded-lg'>
            <div className='w-[10%] bg-white inline-block mr-6'>
            <img src="https://cdn-icons-png.flaticon.com/512/1380/1380370.png" alt="chat"></img>
            </div>VIA SUPPORT CHAT</button>
        <button type="button" className='text-xs p-2 sm:text-sm md:text-md bg-black flex items-center justify-center text-white mx-4
        rounded-lg'>
            <div className='w-[10%] bg-white inline-block mr-6'>
                <img src="https://www.tuktukdesign.com/wp-content/uploads/2020/01/call-icon-vector.jpg"alt="logo"></img>
            </div>
            VIA CALL
        </button>
        </div>
        <div className=' border-2 border-black mt-6'>
          <button type='button' className='flex justify-center items-center'><div className='w-[10%] inline-block mr-6'>
            <img src="https://cdn-icons-png.flaticon.com/512/1380/1380370.png" alt="chat"></img>
            </div>VIA E-MAIL FORM</button>
        </div>
        <Form />
      </div>
     
     <div className='md:ml-6 md:w-[50%] m-auto md:relative -top-5'>
            <img src="/Service 24_7.png"alt="service-icon"></img>
        </div>
     
    </div>
  )
}

export default UserData