import React from 'react';
import { FaTerminal } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='flex flex-col justify-start items-start w-full sticky top-0'>
        <div className='flex justify-between items-center w-full py-2 px-5 rounded-md navbar'>
            <div className='flex items-center gap-3'>
            <div className='p-2 rounded-full bg-rose-700'></div>
            <div className='p-2 rounded-full bg-yellow-700'></div>
            <div className='p-2 rounded-full bg-lime-700'></div>
            </div>
            <div className='flex-grow flex justify-center'>
                <p className='flex items-center gap-2 text-md font-medium text-green-700'>{`Priyanshu's Portfolio`}
                </p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;