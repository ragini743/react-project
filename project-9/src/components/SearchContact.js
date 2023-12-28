import React from 'react'

const SearchContact = () => {
  return (
    <div className='flex items-center mt-6'>
        <div className='border-2 border-white text-white font-thin text-xs items-center rounded-lg flex p-1 w-[80%] md:text-sm md:p-2'>
            <img src="./search-icon.png" alt="search-logo" className='mr-5 ml-5'>
            </img>
             search contact
        </div>
        <div className='w-[15%] ml-[5%]'>
            <img src='./Group 1.png' alt="add-icon"></img>
        </div>
    </div>
  )
}

export default SearchContact