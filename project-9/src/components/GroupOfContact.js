import React from 'react';

const GroupOfContact = ({cont}) => {
    console.log("cont",cont)
  return (
    <div className='bg-yellow flex p-2  mb-4 rounded-lg items-center justify-between'>
        <div className='flex '>
        <div className='mr-4 '>
            <img src ="./user-circle-thin.png" alt="icon"></img>
        </div>
        <div className=''>
            <p className='font-bold'>{cont.name}</p>
            <p className='font-normal'>{cont.email}</p>
        </div>
        </div>
        <div className='flex'>
        <div className='mr-3'>
            <img src ="./edit-icon.png" alt="icon"></img>
        </div>
        <div>
            <img src ="./trash-icon.png" alt="icon"></img>
        </div>
        </div>
        
    
    </div>
  )
}

export default GroupOfContact