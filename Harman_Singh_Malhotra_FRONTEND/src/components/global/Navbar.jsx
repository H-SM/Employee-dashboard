import React, { useEffect, useState } from 'react'
import logo from "./../../assets/logo.png"

const Navbar = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
        //cleaning up of interval on unmounting
    }, []);

    return (
        <div className='w-full max-w-[90rem] h-[6rem] flex justify-between items-center px-3'>
            <div className='w-fit h-[4rem] flex justify-start items-center gap-3'>
                <div className='bg-gray-200 w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem] rounded-full object-contain'>
                    <img src={logo} alt="logo" className='w-[4rem] overflow-hidden' />
                </div>
                <p className='hidden sm:flex font-semibold md:text-[1.5rem]'>Employees Activity Dashboard</p>
            </div>
            <div className='flex h-full w-fit flex-col justify-center items-end font-semibold'>
                <p>{dateTime.toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</p>
                <p className='mt-[-0.2rem]'>
                    {dateTime.toLocaleTimeString(undefined, {
                    hour: 'numeric',
                    minute: 'numeric',
                })}
                </p>
            </div>
        </div>
    )
}

export default Navbar;