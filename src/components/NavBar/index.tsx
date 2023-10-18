import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export function NavBar() {
    const [collapse, setCollapse] = useState(true)
    return (
        <div className='bg-blue-400 flex items-center gap-3  px-4 py-3'>
            <span className='font-semibold text-2xl min-w-[200px] text-white'>Library App</span>
            <div className='w-full '>
                <div className={`md:static md:min-h-fit flex bg-blue-400  md:flex-row md:w-auto flex-col w-full absolute  min-h-[20vh] left-0 transition-all duration-500 ease-in  items-start gap-4 ${collapse ? 'top-[-100%] md:opacity-100' : 'top-[6%] opacity-100'}`}>
                    <ul className='flex md:flex-row flex-col items-start md:items-center md:mt-3  ml-4 gap-4 text-lg text-white w-full '>
                        <li className='hover:text-gray-500'><a href="!">Home</a></li>
                        <li className='hover:text-gray-500'><a href="!">Search Book</a></li>
                    </ul>
                    <ul className='md:w-[150px] md:ms-auto items-center ml-4'>
                        <li className=''>
                            <a href="!" type='button' className='rounded-md w-full border-white border-2 py-2 px-6 text-center font-normal text-white hover:bg-white hover:text-black'>Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div onClick={() => { setCollapse(!collapse) }}>
                {collapse ? <AiOutlineMenu className='w-[30px] h-[30px] cursor-pointer  md:hidden' /> :
                                <AiOutlineClose className='w-[30px] h-[30px] cursor-pointer md:hidden ' />}
            </div>
        </div>
    );
}
