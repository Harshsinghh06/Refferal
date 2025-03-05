import { useContext } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { currentUser } from "../data/data";
import Dashboard from "./Profile";
import YourReferal from "./YourReferal";
function Menu() {

    const [first, setfirst] = useState("")
    const location = useLocation();
    useEffect(() => {
        return () => {

            setfirst(params)
        }
    }, [location])
    const params = location.pathname.split("/")[1];
    return <>
        <div className="bg-black w-72 text-2xl text-white h-screen font-customFont fixed top-0 left-0 overflow-hidden bottom-2">
            <div className="h-screen overflow-y-auto scrollbar-hide flex flex-col gap-2 mt-3 pb-1">
                <div className="flex w-full justify-center">
                    <Link to="/"> <img src={currentUser.img} alt="" className="w-32 h-32 object-cover" /></Link>
                </div>
                <Link to="/" className="text-white"> <div>
                    <p>{currentUser.firstName}</p>
                    <p className="text-xl">{currentUser.email}</p>

                </div></Link>
                <hr />
                <div className="flex justify-center">
                   
                </div>
                <div className="flex-col gap-2 flex items-start font-bold">
                    <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16 ${params === "dashboard" ? "bg-red-600" : "bg-black"}`}>

                        <Link to={`/dashboard`}>     <div>
                            <img src="/1.png" alt="" className="w-7" />
                        </div></Link>
                        <Link to={`/dashboard`}>      <div className="text-[18px] ">
                            Profile
                        </div></Link>
                        <div className={`absolute left-[276px] ${params !== "dashboard" ? "hidden" : "visible"}`}>
                            <img src="/triangle.png" alt="" className="w-3 flex " />
                        </div>

                    </div>

                    <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16 h-12  ${params === "yourReferal" ? "bg-red-600" : "bg-black"}`}>
                        <Link to={`/yourReferal`}>          <div>
                            <img src="/2.png" alt="" className="w-7" />
                        </div></Link>
                        <Link to={`/yourReferal`}>     <div className="text-[18px]">
                            Your Referal
                        </div></Link>
                        <div className={`absolute left-[276px] ${params !== "yourReferal" ? "hidden" : "visible"}`}>
                            <img src="/triangle.png" alt="" className="w-3 flex " />
                        </div>
                    </div>

                    <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16  ${params === "chief_mentors" ? "bg-red-600" : "bg-black"}`}>
                        <Link to={`/chief_mentors/${currentUser._id}`}>            <div>
                            <img src="/3.png" alt="" className="w-7" />
                        </div></Link>
                        <Link to={`/chief_mentors/${currentUser._id}`}>      <div className="text-[18px]">
                            Tasks
                        </div></Link>
                        <div className={`absolute left-[276px] ${params !== "chief_mentors" ? "hidden" : "visible"}`}>
                            <img src="/triangle.png" alt="" className="w-3 flex " />
                        </div>
                    </div>
                    <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16 ${params === "resources" ? "bg-red-600" : "bg-black"}`}>
                        <Link to={`/resources/${currentUser._id}`}>       <div>
                            <img src="/4.png" alt="" className="w-7" />
                        </div></Link>
                        <Link to={`/resources/${currentUser._id}`}>      <div className="text-[18px]">
                            LeaderBoard
                        </div></Link>
                        <div className={`absolute left-[276px] ${params !== "resources" ? "hidden" : "visible"}`}>
                            <img src="/triangle.png" alt="" className="w-3 flex " />
                        </div>
                    </div>
                    <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16 ${params === "calendar" ? "bg-red-600" : "bg-black"}`}>
                        <Link to={`/calendar/${currentUser._id}`}>      <div>
                            <img src="/5.png" alt="" className="w-7" />
                        </div></Link>
                        <Link to={`/calendar/${currentUser._id}`}>   <div className="text-[18px]">
                            Certificates
                        </div></Link>
                        <div className={`absolute left-[276px] ${params !== "calendar" ? "hidden" : "visible"}`}>
                            <img src="/triangle.png" alt="" className="w-3 flex " />
                        </div>
                    </div>
                    <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16 ${params === "support" ? "bg-red-600" : "bg-black"}`}>
                        <Link to={`/support/${currentUser._id}`}>       <div>
                            <img src="/support.png" alt="" className="w-7" />
                        </div></Link>
                        <Link to={`/support/${currentUser._id}`}>      <div className="text-[18px]">
                            Support
                        </div></Link>
                        <div className={`absolute left-[276px] ${params !== "support" ? "hidden" : "visible"}`}>
                            <img src="/triangle.png" alt="" className="w-3 flex " />
                        </div>
                    </div>
                    <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16  ${params === "ai" ? "bg-red-600" : "bg-black"}`}>
                        <Link to={`/ai/${currentUser._id}`}>      <div>
                            <img src="/6.png" alt="" className="w-7" />
                        </div></Link>
                        <Link to={`/ai/${currentUser._id}`}>       <div className="text-[18px]">
                            WithDrawl
                        </div></Link>
                        <div className={`absolute left-[276px] ${params !== "ai" ? "hidden" : "visible"}`}>
                            <img src="/triangle.png" alt="" className="w-3 flex " />
                        </div>
                    </div>
                    <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16  ${params === "test" ? "bg-red-600" : "bg-black"}`}>
                        <Link to={`https://candidate.speedexam.net/signin.aspx?site=scholarsboost`}>          <div>
                            <img src="/7.png" alt="" className="w-7" />
                        </div></Link>
                        <Link to={`https://candidate.speedexam.net/signin.aspx?site=scholarsboost`}>         <div className="text-[18px]">
                            Sign Out
                        </div></Link>
                        <div className={`absolute left-[276px] ${params !== "test" ? "hidden" : "visible"}`}>
                            <img src="/triangle.png" alt="" className="w-3 flex " />
                        </div>
                    </div>
                  
                </div>

            </div>
        </div>
    </>
}
export default Menu