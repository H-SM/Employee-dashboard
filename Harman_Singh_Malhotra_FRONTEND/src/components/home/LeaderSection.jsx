import React from 'react'
import gold from "../../assets/gold.svg"
import silver from "../../assets/silver.svg"
import bronze from "../../assets/bronze.svg"

const LeaderSection = ({ user }) => {
    return (
        <tr className={`border-b border-blue-800/10 border-2 ${user.Rank % 2 == 1 && "bg-blue-100/30"}`}>
            <td className="hidden py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 text-opacity-100 px-6 sm:flex  justify-start items-start gap-3">
                {user.Rank === 1 ?
                    <img src={gold} alt="gold" />
                    : user.Rank === 2 ?
                        <img src={silver} alt="silver" />
                        :
                        user.Rank === 3 &&
                        <img src={bronze} alt="bronze" />
                }
            </td>
            <td className="table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-medium text-opacity-100 px-6">
                {user.Rank}
            </td>
            <td className="table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-medium text-opacity-100 px-6">
                <div className='flex justify-start items-center gap-2'>
                    <div className={`w-[2rem] rounded-full flex justify-center items-center`}>
                        <img className="w-[2rem] rounded-full object-contain" src={user.image} alt="user image" />
                    </div>
                    <p className='font-semibold'>{user.Name}</p>
                </div>

            </td>
            <td className="hidden sm:table-cell py-[0.875rem] pl-[1rem] pr-[0.75rem] text-left text-[0.875rem] leading-5 font-medium text-opacity-100 px-6">
                {user.Designation}
            </td>
            <td className="hidden sm:table-cell text-left text-[0.875rem] leading-5 font-medium text-opacity-100">
                {user.Hours}
            </td>
            <td className="hidden lg:table-cell text-left text-[0.875rem] leading-5 font-medium text-opacity-100">
                <div className='flex gap-1 w-fit'>
                    <div>
                        {user.ChangesDir === 1 ?
                            <svg fill="#097969" width="1.5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#097969"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="arrow-up"> <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"></rect> <path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"></path> </g> </g> </g></svg>
                            :
                            <svg fill="#C70039" width="1.5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="arrow-downward"> <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect> <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path> </g> </g> </g></svg>
                        }
                    </div>
                    <p>{user.Changes}</p>
                </div>
            </td>
        </tr>
    )
}

export default LeaderSection
