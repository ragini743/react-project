import React from 'react'

const SearchContact = ({onOpen ,update,setUpdate}) => {
  return (
    <div className='flex items-center mt-6'>
        <div className='border-2 border-white items-center rounded-lg flex p-1 md:p-2 relative  w-[85%] md:w-[80%]'>
            <img src="./search-icon.png" alt="search-logo" className='mr-5 ml-5'>
            </img>
            <input type="text" className=' text-white font-thin text-xs  md:text-sm bg-transparent outline-none flex-grow' placeholder='search Contact'></input>
            
        </div>
        <div className='w-[15%] ml-4 flex justify-end md:w-[20%]'>
            <img src='./Group 1.png' alt="add-icon" className='cursor-pointer'
            onClick={() => {
              onOpen();
              setUpdate(false)
            }}
            ></img>
        </div>
    </div>
  )
}

export default SearchContact