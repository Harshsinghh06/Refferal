import React from 'react'
import { data } from '../data/data'
import Slide from "../components/Slide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { currentUser } from '../data/data';
import Menu from './Menu';
import UserHeader from './UserHeader';

const YourReferal = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enables auto-sliding
        autoplaySpeed: 5000,
        arrows: false,
    };
    return (
        <div className='flex'>
            <Menu />
            <div className='"flex flex-col  p-2 gap-2 overflow-y-auto h-screen ml-[18rem] scrollbar-hide w-full' >
                <UserHeader/>

                <div className="slider w-full mt-4">
                    <Slider {...settings}> {data.map((obj) => <Slide obj={obj} key={obj} />)
                    }</Slider>
                </div>
                <div className='flex mt-10 border-y p-2 px-10  justify-between  border-black m-3'>
                    <div className='text-xl font-bold'>Total Referrals – N</div>
                    <div className='text-xl font-bold'>Total Referrals – N</div>

                </div>
                {/* Div */}
                <div className='flex flex-col  gap-2'>
                    {currentUser.referals.referals.map((user, index) => (
                        <div key={index} className={`flex rounded-3xl w-full justify-between  ${user.totalAmount > 199 ? "bg-black" : "bg-[#e41818]"} p-4 text-white min-h-32`}>
                            {/* Mentee Details */}
                            <div className='flex text-start text-xl flex-col'>
                                <h1 className='text-yellow-300 text-2xl'>Mentors Details</h1>
                                <p>plane : {user.plane}</p>
                                <p>Name : {user.name}</p>
                                <p>Date : {user.date} | {user.time}</p>

                            </div>
                            {/*Referal Status */}
                            <div className='flex text-start text-xl flex-col'>
                                <p>Referal Status</p>
                                <img className='h-20 object-cover' src="./success.png" alt="" />
                            </div>
                            {/* Total Amount */}
                            <div className='flex text-center text-xl flex-col gap-1 justify-center'>
                                <p>Total Amount</p>
                                <p>Rs.{user.totalAmount}</p>
                                {user.credited && <p className='text-base'>(Successfully credited in your wallet)</p>}
                            </div>

                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default YourReferal