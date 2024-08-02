import React from 'react';
import { FaTerminal } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='flex flex-col justify-start items-start w-full'>
        <div className='flex justify-between items-center w-full py-2 px-5 rounded-md navbar'>
            <p className='text-3xl'>
            <FaTerminal className='text-red-700'/>
            </p>
            <div className='flex-grow flex justify-center'>
                <p className='flex items-center gap-2 text-md font-medium text-green-700'>{`Priyanshu's Portfolio`}
                </p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;