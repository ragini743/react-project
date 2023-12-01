import React from 'react'

const Form = () => {
  return (
    <div className='mt-6'>
      <form>
      <div className='border-2 border-black relative p-3 mb-6'>
        <label className='absolute -top-4 left-10 px-2 bg-white'>Name </label>
        <input type='text'>
          </input>
         
      </div> 
      <div className='border-2 border-black relative p-3 mb-6'>
      <label className='absolute -top-4 left-10 px-2 bg-white'>E-mail </label>
        <input type='email'>
          </input>
      </div> 
      <div className='border-2 border-black relative p-3 mb-6'>
      <label className='absolute -top-4 left-10 px-2 bg-white'>TEXT </label>
        <textarea></textarea>
      </div> 
      </form> 
    </div>
  )
}

export default Form