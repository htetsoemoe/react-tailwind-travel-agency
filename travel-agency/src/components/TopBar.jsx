import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';

const TopBar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2'>
            <div className="flex items-center">
                <BsChatSquareDots
                    size={30}
                    className='text-[var(--primary-dark)] mr-2' />
                <h1 className="text-xl font-bold text-gray-700">WEEKDAY</h1>
            </div>
            <div className="flex">
                <div className="hidden md:flex items-center px-6">
                    <AiOutlineClockCircle
                        size={20}
                        className='mr-2 text-[var(--primary-dark)]' />
                    <p className="text-sm text-gray-700">9AM - 5AM</p>
                </div>
                <div className="hidden md:flex items-center px-6 pr-0">
                    <AiFillPhone
                        size={20}
                        className='mr-2 text-[var(--primary-dark)]' />
                    <p className="text-sm text-gray-700 mr-5">09 1111 23 447</p>
                    <button>Get a Free Quote</button>
                </div>
            </div>
        </div>
    )
}

export default TopBar
