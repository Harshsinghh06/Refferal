import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
const Register = () => {
    const [e, sete] = useState("")
    const [o, seto] = useState("")
    const [phone, setphone] = useState()
    const [page, setpage] = useState(1);
    const navigate = useNavigate()
    const [formData1, setFormData1] = useState({
        fullName: "",
        mobileNo: '',
        email: "",
        domain: "",
        explainYourself: "",
        gender: "",
        currentCollege: "",
        YearOfAddmission: "",
        mailId: "",
        AIR: "",
        Attempt: "",
        Year: "",
        Branch: "",
        know: "",
        state: "",
        city: "",
        lang: "",
        exp: ""

    });
    const [verify, setverify] = useState(false)
    const [otp, setotp] = useState("")
    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setFormData1((prevData) => ({
            ...prevData,   // Preserve previous data
            [name]: value, // Update the specific field
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Form Data:", formData1);
        // Send formData to backend
    };



    return (

        <div className="flex py-4 justify-betweeen items-center min-h-screen bg-cover bg-center bg-no-repeat font-customFont" style={{ backgroundImage: `url('/bck.png')` }}>
            <div className="w-[40%] relative">
                <div className="w-full h-screen">
                    <img src="l.png" alt="" className="w-20 left-2 top-4 absolute"/>
                    <img src="12.png" alt="" className=" absolute left-10 top-28 w-4/5"/>
                </div>
            </div>
            <div className="bg-white p-6 w-[55%] rounded-2xl shadow-lg ">


                <h2 className="text-start text-xl font-bold text-black">
                    SignUp!!!
                </h2>
                <h2 className="text-start text-lg font-bold text-black">
                    Register as an Intern on ScholarsBoost
                </h2>
                <div className="relative flex items-center justify-between w-full p-4">

                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black transform -translate-y-1/2"></div>


                    <div className={`w-9 h-9 rounded-full ${page == 1 ? "bg-black" : "bg-[#ff1414]"} relative z-10 ml-12`}></div>
                    <div className={`w-9 h-9 rounded-full  ${page == 2 ? "bg-black" : "bg-[#ff1414]"} relative z-10 `}></div>
                    <div className={`w-9 h-9 rounded-full ${page == 3 ? "bg-black" : "bg-[#ff1414]"} relative z-10 mr-12`}></div>
                </div>

                <form className="mt-4 relative">

                    {page == 1 && <div>
                        <div className="flex flex-col gap-1">
                            {" "}
                            <p className="text-start font-bold"> Full Name</p>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter Full Name"
                                className="border p-2 w-full rounded-lg border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}
                        <div className="relative mt-2 ">
                            {" "}
                            <p className="text-start font-bold mb-1"> Enter Mobile No.</p>
                            <input
                                type="Number"
                                name="phone"
                                placeholder="Enter Phone Number"
                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={(e) => (setphone(e.target.value))}
                                required
                            />{" "}
                            <span className="absolute right-2 top-10">
                                <img src="/phone.png" alt="Phone Icon" className="h-5 " />
                            </span>{" "}
                        </div>{" "}
                        <div className="relative mt-2  items-center">
                            {" "}
                            <p className="text-start font-bold mb-1"> Enter Email ID</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                className="border p-2 w-full rounded-lg border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}


                        <div className="mt-2">
                            <p className="text-start font-bold mb-1">Gender</p>

                            <select
                                name="gender"

                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={handleChange1}
                                required
                            >
                                {" "}
                                <option>Select Gender</option> <option>Male</option>{" "}
                                <option>Female</option> <option>Other</option>{" "}
                            </select>{" "}

                        </div>

                        <div className="mt-2">
                            <p className="text-start font-bold mb-1">Select Domain</p>

                            <select
                                name="domain"
                                className="border p-2 w-full rounded-lg  border-black "
                                onChange={handleChange1}
                                required
                            >
                                {" "}
                                <option >Select Domain</option> <option>HumanResourses Managment</option>{" "}
                                <option>Marketing</option>
                            </select>{" "}

                        </div>
                        <div className="relative mt-2  items-center">
                            {" "}
                            <p className="text-start font-bold mb-1"> Explain Yourself in Brief?</p>
                            <input
                                type="textl"
                                name="explainYourself"

                                className="border p-2 w-full rounded-lg border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}



                        <div className="w-full flex justify-end">
                            <div
                                type="submit"
                                onClick={() => setpage(2)}
                                className=" bg-tahiti-100 hover:cursor-pointer px-4 w-fit text-white p-2 mt-4 rounded font-bold"
                            >
                                Next
                            </div>{" "}
                        </div>
                    </div>}
                    {page == 2 && <div>
                        <div className="flex flex-col gap-1">
                            {" "}
                            <p className="text-start font-bold">Current College</p>
                            <input
                                type="text"
                                name="currentCollege"
                                placeholder="Colleg Name"
                                className="border p-2 w-full rounded-lg border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}
                        <div className="relative mt-2 ">
                            {" "}
                            <p className="text-start font-bold mb-1">Year Of Addmission</p>
                            <input
                                type="Number"
                                name="YearOfAddmission"

                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}
                        <div className="relative mt-2  items-center">
                            {" "}
                            <p className="text-start font-bold mb-1"> Email ID</p>
                            <input
                                type="email"
                                name="mailId"
                                value={formData1.mailId}
                                placeholder="Only College Mail"
                                className="border p-2 w-full rounded-lg border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}


                        <div className="mt-2">
                            <div className="flex mb-2 justify-between">
                                <p className="text-start font-bold mb-1">OTP</p>
                                <button type="button" className="p-1 bg-green-600 text-white rounded-sm text-sm">
                                    Send OTP
                                </button>
                            </div>

                            <input
                                type="text"
                                name="otp"
                                value={formData1.otp}
                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={handleChange1}
                                required
                            />{" "}


                        </div>

                        <div className="relative mt-2 ">
                            {" "}
                            <p className="text-start font-bold mb-1">All India Rank (Specify Rank Categorywise)</p>
                            <input
                                type="Number"
                                name="AIR"
                                value={formData1.AIR}
                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}
                        <div className="relative mt-2 ">
                            {" "}
                            <p className="text-start font-bold mb-1">Attempt</p>
                            <input
                                type="Number"
                                name="Attempt"
                                value={formData1.Attempt}
                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}
                        <div className="relative mt-2 ">
                            {" "}
                            <p className="text-start font-bold mb-1">Current Year</p>
                            <select
                                type="Number"
                                name="Year"
                                value={formData1.Year}
                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={handleChange1}
                                required
                            >
                                <option >1</option><option >2</option><option >3</option><option >4</option><option >5</option>
                            </select>


                        </div>{" "}
                        <div className="relative mt-2 ">
                            {" "}
                            <p className="text-start font-bold mb-1">Course and Branch</p>
                            <input
                                type="text"
                                name="Branch"
                                value={formData1.Branch}
                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}




                        <div className="w-full flex justify-between">
                            <div
                                type="submit"
                                onClick={() => setpage(page - 1)}
                                className=" bg-[#ff1414] hover:cursor-pointer px-4 w-fit text-white p-2 mt-4 rounded font-bold"
                            >
                                Prev
                            </div>{" "}
                            <div
                                type="submit"
                                onClick={() => setpage(page + 1)}
                                className=" bg-[#ff1414] hover:cursor-pointer px-4 w-fit text-white p-2 mt-4 rounded font-bold"
                            >
                                Next
                            </div>{" "}
                        </div>
                    </div>}
                    {page == 3 && <div>
                        <div className="flex flex-col gap-1">
                            {" "}
                            <p className="text-start font-bold">Where did you get to know about ScholarsBoost</p>
                            <input
                                type="text"

                                name="know"
                                value={formData1.know}
                                placeholder="Enter Full Name"
                                className="border p-2 w-full rounded-lg border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}
                        <div className="relative mt-2 ">
                            {" "}
                            <p className="text-start font-bold mb-1">State</p>
                            <input
                                type="text"
                                name="state"
                                value={formData1.state}
                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}
                        <div className="relative mt-2  items-center">
                            {" "}
                            <p className="text-start font-bold mb-1">City</p>
                            <input
                                type="text"
                                name="city"
                                value={formData1.city}

                                className="border p-2 w-full rounded-lg border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}




                        <div className="relative mt-2 ">
                            {" "}
                            <p className="text-start font-bold mb-1">Language</p>
                            <input
                                type="text"
                                name="lang"
                                value={formData1.lang}
                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}
                        <div className="relative mt-2 ">
                            {" "}
                            <p className="text-start font-bold mb-1">Any Previous Experience in your Selected Domain</p>
                            <input
                                type="text"
                                name="exp"
                                value={formData1.exp}
                                className="border p-2 w-full rounded-lg  border-black"
                                onChange={handleChange1}
                                required
                            />{" "}

                        </div>{" "}






                        <div
                            onClick={() => setpage(page - 1)}
                            className=" bg-[#ff1414] hover:cursor-pointer px-4 w-fit text-white p-2 mt-4 rounded font-bold"
                        >
                            Prev
                        </div>

                    </div>}
                    {page == 3 &&
                        <button
                            type="submit"
                            className=" bg-[#ff1414] ml-auto px-4 w-fit text-white p-2 mt-4 rounded font-bold"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    }
                    <p className="text-center mt-2">
                        Already Registered?{" "}
                        <Link to="/login" className="text-blue-600">
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>

    );
};
export default Register;
