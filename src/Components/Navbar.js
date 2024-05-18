import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar flex bg-zinc-900 text-white h-2  w-full p-10 items-center list-none justify-end gap-5 absolute top-0
    
    
    '>
      <li className='hover:cursor-pointer'>Home</li>
      <li className='hover:cursor-pointer'>Gallery</li>
      <li className='hover:cursor-pointer'>Address</li>
      <li className='hover:cursor-pointer'>Contact</li>
      <li className='hover:cursor-pointer'>Join Us</li>
    </div>
  )
}
