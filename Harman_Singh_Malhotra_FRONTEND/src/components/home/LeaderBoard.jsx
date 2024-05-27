import React from 'react'

import { rankings } from '../../constant';
import LeaderSection from './LeaderSection';

const LeaderBoard = () => {
    return (
        <div className='w-full h-full rounded-lg z-20 overflow-hidden '>
            <table className="min-w-full text-left text-sm font-light z-10">
                <thead className="border-b font-medium dark:border-primary bg-blue-800">
                    <tr className='text-white'>
                        <th
                            scope="col"
                            className="hidden sm:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100  px-6"
                        >
                            <p className="hidden">medals</p>
                        </th>
                        <th
                            scope="col"
                            className={`table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 px-6`}
                        >
                            Rank
                        </th>

                        <th
                            scope="col"
                            className={`py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 px-6`}
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className={`hidden sm:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 px-6`}
                        >
                            Designation
                        </th>
                        <th
                            scope="col"
                            className={`hidden sm:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 px-6`}
                        >
                            No. of hours worked
                        </th>
                        <th
                            scope="col"
                            className={`hidden lg:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-bold text-opacity-100 px-6`}
                        >
                            Changes
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rankings
                        .map((user, index) => (
                            <LeaderSection user={user} key={index} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default LeaderBoard
