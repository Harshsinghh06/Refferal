import React, { useContext, useState } from 'react'

import { currentUser } from '../data/data';
import { Link, useNavigate } from 'react-router-dom';
const UserHeader = () => {

    const navigate = useNavigate()
    const handleClick = async () => {
        try {
            console.log("hello")


        } catch (error) {

        }
    }
    const [plans, setplans] = useState(false)
    return (
        <div className="flex font-customFont justify-between mt-3">
            <div className="flex flex-col pl-2">
                <div className="flex text-start gap-1  font-bold text-2xl">
                    Welcome {currentUser.firstName} <span className="text-[#ff1414]">{currentUser.lastName}</span>
                </div>
                <div className=" text-start "><span className="font-bold">Scholars<span className="text-[#ff1414]">Boost</span> </span> Student DashBoard</div>
            </div>

            <Link to="/wallet">
                <button className='bg-[#ff1414] text-white p-1 rounded-2xl px-3 font-bold  mr-10 text-xl flex' >
                    <img src="wallet.png" alt="" className='w-12 object-cover'/>
                    <div className='flex flex-col'>
                        Wallet <span className='text-[#fcff24]'>Rs.{currentUser.balance}</span>
                    </div>
                </button>
            </Link>


        </div>

    )
}

export default UserHeader;
