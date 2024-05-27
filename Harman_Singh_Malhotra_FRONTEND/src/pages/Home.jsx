import React from 'react'
import Navbar from '../components/global/Navbar'
import LeaderBoard from '../components/home/LeaderBoard';

const Home = () => {
    return (
        <div className='w-full h-fit flex flex-col justify-start items-center'>
            <Navbar/>
            <div className='w-full max-w-[100rem] h-fit flex flex-grid justify-center items-start gap-3 flex-wrap px-2'>
                <div className='border bottom-2 shadow-lg w-[60rem] h-fit max-h-[80vh] rounded-xl overflow-x-auto'>
                    <LeaderBoard/>
                </div>
                <div className='shadow-lg w-[20rem] h-[30rem] rounded-xl bg-gradient-to-t from-blue-300/40 to-white border-2 flex flex-col justify-between p-2 items-center gap-2'>
                    <div className='rounded-lg w-full max-w-[18rem] h-[18rem] overflow-hidden flex justify-center items-center'>
                        <img src="https://xsgames.co/randomusers/assets/avatars/male/66.jpg" alt="rank_1" className='w-full object-cover' />
                    </div>
                    <h1 className='text-blue-800 font-bold text-[1.2rem] sm:text-[1.5rem]'>Employee of the Month</h1>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <p className='font-bold text-[1.2rem]'>Rakesh Sharma</p>
                        <p>UI/UX Designer</p>
                    </div>

                    <img src="https://www.pwc.com/ca/en/industries/asset-management/assets/p1114181-fs-refresh-awm-web-assets-main-image.svg" className="w-[9rem] sm:w-[12rem]" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
