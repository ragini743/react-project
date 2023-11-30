import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-4 items-center shadow-lg fixed bg-white'>
        <div className='w-[16%]'>
            <img src='https://yt3.googleusercontent.com/ytc/APkrFKYuBowkxrmBN52Nt-LbGlrjZnCFagkkS_0yyLwP=s900-c-k-c0x00ffffff-no-rj'alt="logo"></img>
        </div>
        <ul className='flex'>
          <li className='mr-4'>About</li>
          <li className='mr-4'>Home</li>
          <li className='mr-4'>Contact</li>
        </ul>
    </div>
  )
}

export default Header