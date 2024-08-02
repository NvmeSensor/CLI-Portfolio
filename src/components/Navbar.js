import React from 'react';
import { HiOutlineLightningBolt } from "react-icons/hi";
import { SiApmterminals } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className='flex flex-col justify-start items-start px-5 py-2 w-full'>
        <div className='flex justify-between items-center w-full p-2 rounded-md navbar'>
            <p className='text-3xl'>
            <SiApmterminals />
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