import React from 'react'

const Modal = ({open, onClose , }) => {
  return (
    <div className='absolute left-10 right-10 '>
      <div className='bg-white w-full h-full rounded-md'>
        <div className=' flex justify-end mr-4'>
            <img src = "https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt='cross-icon'className='w-[10%]' onClick={onClose}>
            </img>
        </div>

      </div>        
    </div>
  )
}

export default Modal