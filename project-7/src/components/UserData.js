import React from 'react'
import Form from './Form'
const UserData = () => {
  return (
    <div className='relative top-[100px]'>
      <div>
        <div className='flex items-center'>
        <button type="button" className='bg-black text-white mx-4
        rounded-lg'>
            <div className='w-[10%] bg-white inline-block mr-6'>
            <img src="https://cdn-icons-png.flaticon.com/512/1380/1380370.png" alt="chat"></img>
            </div>VIA SUPPORT CHAT</button>
        <button type="button" className='bg-black text-white mx-4
        rounded-lg'>
            <div className='w-[10%] bg-white inline-block mr-6'>
                <img src="https://www.tuktukdesign.com/wp-content/uploads/2020/01/call-icon-vector.jpg"alt="logo"></img>
            </div>
            VIA CALL
        </button>
        </div>
        <div className='flex justify-center items-center border-2 border-black'>
          <button type='button'><div className='w-[10%] inline-block mr-6'>
            <img src="https://cdn-icons-png.flaticon.com/512/1380/1380370.png" alt="chat"></img>
            </div>VIA E-MAIL FORM</button>
        </div>
        <Form />
      </div>
     
     <div>
            <img src="/Service 24_7.png"alt="service-icon"></img>
        </div>
     
    </div>
  )
}

export default UserData