import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



import UserHeader from "./UserHeader.jsx";
import Menu from "./Menu.jsx";
import { currentUser } from "../data/data.js";
import { data } from "../data/data.js";


import { ToastContainer, toast } from "react-toastify";
import {
    QueryClient,
    QueryClientProvider,
    useQuery, useMutation
} from '@tanstack/react-query'

import axios from "axios";
function Dashboard() {

    const [indianCities, setIndianCities] = useState([]);
    const location = useLocation();
    const [first, setFirst] = useState("");

    const fetching = async () => {
        try {
            const response = await axios.post("https://countriesnow.space/api/v0.1/countries/cities", {
                country: "India",
            });
            console.log(response.data);
            setIndianCities(response.data.data); // Correctly setting cities array
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    useEffect(() => {
        fetching();
        setFirst(location.pathname.split("/")[2]);
    }, [location]);
    const params = location.pathname.split("/")[2];


    console.log(data)
    console.log("Mentee ID:", location.pathname.split("/")[2]);



    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
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
    const [form, setform] = useState({
        fullName: "",
        email:  "",
        dob:  "",
        gender:  "",
        mobile:  "",
        city:  "",
        college:  "",
        type:  "",
        course:  "",
        academic: "",
    });
    useEffect(() => {
        if (data) {
            setform({
                fullName: data.FullName || "",
                email: data.email || "",
                dob: data.dob || "",
                gender: data.gender || "",
                mobile: data.mobile || "",
                city: data.city || "",
                college: data.college || "",
                type: data.type || "",
                course: data.type || "",
                academic : data.academic || "",
            });
        }
    }, [data]);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await apiRequest.put(`/api/v1/mentee/updatementees/${data._id}`, {
                fullName: data.FullName ,
                email: data.email ,
                dob: data.dob ,
                gender: data.gender ,
                mobile: data.mobile ,
                city: data.city ,
                college: data.college,
                type: data.type,
                course: data.type ,
                academic : data.academic
            
            })
            const notify = () => toast("Profile Updated Successfully")
            notify()
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        } catch (error) {
            console.log(error)
        }
    }
    const [image, setimage] = useState(null)
    console.log(form)
    const handleUpload = async (e) => {
        e.preventDefault();

        try {
            toast("Wait your photo is getting updated")
            const res = await upload(image);
            setform((prevForm) => ({
                ...prevForm,
                img: res, // Use the secure URL from the response
            }));
            toast("Image Uploaded Successfully");
        } catch (error) {
            console.error(error);
            toast("Error uploading image");
        }
    };
    return <>

        {<div className="flex gap-2 font-customFont">
            <Menu />
            <div className="flex flex-col w-full font-customFont p-2 gap-2 overflow-y-auto h-screen ml-[19rem] scrollbar-hide">

                <UserHeader />
                <form className="flex flex-col p-6 gap-6">
                    <div className="flex gap-10">

                        <div className="flex flex-col font-bold gap-2  w-full" >
                            <h1 className="text-start text-xl">Personal Details</h1>
                            <div className="bg-black h-[1px] w-[120%] mt-1"></div>
                            <div className="flex gap-6  mt-2 pr-10">
                                <div className="flex gap-2 flex-col w-full">
                                    <label htmlFor="" className="text-start text-sm">Full Name</label>
                                    <input type="text" className="border-[1px] border-black w-full rounded-lg p-2" name="fullName" onChange={handleChange} value={form.fullName} />
                                </div>
                                <div className="flex gap-2 flex-col  w-full">
                                    <label htmlFor="" className="text-start text-sm">DOB</label>
                                    <input type="text" className="border-[1px] border-black w-full rounded-lg p-2 h-[39px]" name="dob" onChange={handleChange} value={form.don} />
                                </div>
                            </div>
                            <div className="flex gap-6 pr-10 w-full">
                                <div className="flex gap-2 flex-col w-full">
                                    <label htmlFor="" className="text-start text-sm">Email</label>
                                    <input type="date" className="border-[1px] border-black  rounded-lg p-2" name="email" onChange={handleChange} value={form.email} />
                                </div>
                                <div className="flex gap-2 flex-col w-full">
                                    <label htmlFor="" className="text-start text-sm">Mobile No.</label>
                                    <input type="text" className="border-[1px] border-black  rounded-lg p-2 h-[41px]" name="mobile" onChange={handleChange} value={form.mobile} />
                                </div>
                            </div>
                            <div className="flex gap-6 pr-10 w-full">
                                <div className="flex gap-2 flex-col w-full">
                                    <label htmlFor="" className="text-start text-sm">Gender</label>
                                    <input type="text" className="border-[1px] border-black  rounded-lg p-2 h-[39px]" name="gender" onChange={handleChange} value={form.gender} />
                                </div>
                                <div className="flex gap-2 flex-col w-full">
                                    <div className="flex gap-2 flex-col w-full">
                                        <label htmlFor="" className="text-start text-sm">City You Live In</label>
                                        <input type="text" className="border-[1px] border-black  rounded-lg p-2 h-[39px]" name="city" onChange={handleChange} value={form.city} />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h1 className="text-start font-bold text-xl">Educational Qualifications</h1>
                        <div className="bg-black h-[1px]  mt-1"></div>
                        <div className="mt-3 flex flex-col gap-3">

                            <div className="flex gap-4 pr-10 w-full">

                                <div className="flex flex-col  gap-2 w-full ">
                                    <label htmlFor="" className="text-start font-bold">Current College</label>
                                    <input type="text" className="border-[1px] border-black rounded-lg p-1"  onChange={handleChange} name="college" value={form.college} />
                                </div>
                                <div className="flex flex-col gap-2 w-full ">
                                    <label htmlFor="" className="text-start font-bold">Goverment/Goverment-Aided/Private</label>
                                    <select type="text" className="border-[1px] border-black rounded-lg  p-1" placeholder="Enter Your College Category" onChange={handleChange} name="type" value={form.type} >
                                        <option>Goverment</option> <option >Goverment-Aided</option> <option >Private</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-4 pr-10 w-full">

                                <div className="flex flex-col  gap-2 w-full ">
                                    <label htmlFor="" className="text-start font-bold">Current Course</label>
                                    <input type="text" className="border-[1px] border-black rounded-lg p-1"  onChange={handleChange} name="course" value={form.course} />
                                </div>
                                <div className="flex flex-col gap-2 w-full ">
                                    <label htmlFor="" className="text-start font-bold">Academic Year</label>
                                    <input type="text" className="border-[1px] border-black rounded-lg  p-1"  onChange={handleChange} name="academic" value={form.academic} />
                                </div>
                            </div>

                        </div>


                    </div>
                    <button className="w-full bg-tahiti-100 text-white font-bold text-xl p-2 rounded-lg" onClick={handleClick}>Save Details</button>
                </form>
            </div>
            <ToastContainer />
        </div>}
    </>
}
export default Dashboard

