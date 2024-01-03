import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db } from '../config/Firebase';

const GroupOfContact = ({cont}) => {
    const deleteContact =async (id) =>{
      await deleteDoc(doc(db,"contacts",id))
    }
    console.log("hello")
   return (
    <div className='bg-yellow flex p-2  mb-4 rounded-lg items-center justify-between' key={cont.id}>
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
            <img src ="./trash-icon.png" alt="icon"onClick={() => deleteContact(cont.id)}></img>
        </div>
        </div>
        
    
    </div>
  )
}

export default GroupOfContact