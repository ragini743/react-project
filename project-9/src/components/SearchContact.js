import React from 'react'

const SearchContact = () => {
  return (
    <div className='flex items-center mt-6'>
        <div className='border-2 border-white items-center rounded-lg flex p-1 md:p-2 relative  w-[80%]'>
            <img src="./search-icon.png" alt="search-logo" className='mr-5 ml-5'>
            </img>
            <input type="text" className=' text-white font-thin text-xs  md:text-sm bg-zinc-900 outline-none flex-grow' placeholder='search Contact'></input>
            
        </div>
        <div className='w-[15%] ml-[5%] flex justify-end'>
            <img src='./Group 1.png' alt="add-icon"></img>
        </div>
    </div>
  )
}

export default SearchContact