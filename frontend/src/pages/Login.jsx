import { useState, useEffect,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import Slider from "react-slick";
import {data} from "../data/data"
import Slide2 from "../components/Slide2";
import Slide from "../components/Slide";
import  AuthContext  from "../context/AuthContext";




function Login() {
    

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      alert("Login successful!");
      navigate(`/dashboard/${res.data.mentee._id}`);
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="flex gap-14 items-center min-h-screen w-full bg-cover bg-center relative font-customFont justify-center scrollbar-hide"
      style={{ backgroundImage: `url('/bck.png')` }}
    >
      {/* Login Form */}
      <div className="bg-white rounded-3xl shadow-xl p-6 w-[600px] m-8 border-[1px] border-black">
        <div className="flex justify-between mb-2 gap-3">
          <div className="flex items-start mb-2 gap-3">
          <img src="/l2.png" alt="Logo" className="w-[66px] items-start" />
          <h2 className="text-xl font-bold text-black-600 font-customFont text-left flex flex-col mt-1">
            ScholarsBoost
            <div className="">
            <p className="text-[14px] text-left">Mentoring Your Way To Success</p></div>
          </h2>
          </div>
          <div className="flex gap-4 justify-center items-center">
        <Link to = "/">   <div className="flex font-bold gap-1 items-center">
               <img src="/h.png" alt="" className="w-7"/>
               <span>Home</span>
               </div></Link> 
               <Link to = "https://wa.me/message/VIR7QYU5JZXZM1">     <img src="w.png" alt="" className="w-7" /></Link> 
          </div>
        </div>
        <h3 className="text-xl font-bold text-left mb-1 font-customFont">
          Welcome to India's Best
        </h3>
        <p className="text-xl font-bold text-green-600 text-left mb-4">
          JEE/NEET Dedicated Mentorship Platform
        </p>

        <p className="text-lg font-semibold text-left font-customFont">
          Login to your account
        </p>

        <button className="w-full flex items-center justify-center bg-[#ff1414] text-white py-2 rounded-full mt-4 font-customFont gap-2 font-bold">
         <span><img src="/mail.png" alt="" className="w-6" /></span> Sign in with Email
        </button>

        <form onSubmit={handleLogin} className="mt-4">
          <label className="block text-sm font-semibold mb-1 font-customFont text-left">
            Email*
          </label>
          <input
            type="email"
            className="w-full p-2 border rounded-md mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-sm font-semibold mb-1 font-customFont text-left">
            Password*
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border rounded-md pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute top-3 right-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 font-customFont" /> Keep me logged in
            </label>
            <a href="#" className="text-blue-500 font-customFont">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff1414] text-white py-2 rounded-md mt-4 font-customFont font-bold"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-center mt-3 text-gray-600">OR</div>
          <button className="w-full flex items-center justify-center border border-black py-2 rounded-md mt-2">
            <FcGoogle className="text-xl mr-2 font-customFont" /> Sign in with
            Google
          </button>

          <p className="text-center mt-4 text-sm">
            New Here?{" "}
            <a href="/register" className="text-blue-500 font-customFont">
              Register
            </a>
          </p>
        </div>

      {/* Slider Section */}
      
    </div>
  );
};

export default Login;
