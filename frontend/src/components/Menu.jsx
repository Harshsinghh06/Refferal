import { useContext } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../utilis/context";
function Menu(){
   const {currentUser} = useContext(AuthContext)
    const [first, setfirst] = useState("")
    const location = useLocation();
    useEffect(() => {
      return () => {
       
        setfirst(params)
      }
    }, [location])
    const params = location.pathname.split("/")[1];
    return <>
<div className="bg-black w-72 text-white h-screen fixed top-0 left-0 overflow-hidden bottom-2">
<div className="h-screen overflow-y-auto scrollbar-hide flex flex-col gap-2 mt-3 pb-1">
               <div className="flex justify-center">
                  <img src="/logo.png" alt="" className="w-32"/>
               </div>
           <Link to = "/"> <div>
                  ScholarsBoost
               </div></Link>   
               <div className="flex justify-center">
               <div className="flex gap-3 bg-white text-black rounded-full pt-1 pb-1 justify-center items-center w-52 pr-3">
                  <div>
                     <img src="/login.png" alt="" className="w-10"/>
                  </div>
                  <div className="flex flex-col text-[10px]">
                     <div className="font-bold text-[15px]">
                        {currentUser.fullname} <span className="text-tahiti-100"></span> 
                     </div>
                     <div className="text-[12px] text-start">
                        Profile | JEE
                     </div>
                  </div>
               </div>
               </div>
               <div className="flex-col gap-2 flex items-start font-bold">
          <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16 ${params === "dashboard"? "bg-red-600": "bg-black"}`}>
         
          <Link to= {`/dashboard/${currentUser._id}`}>     <div>
                     <img src="/dashboard.png" alt="" className="w-7"/>
                  </div></Link> 
                  <Link to= {`/dashboard/${currentUser._id}`}>      <div className="text-[13px]">
                     DashBoard
                  </div></Link> 
                  <div className={`absolute left-[276px] ${params !== "dashboard"? "hidden": "visible"}`}>
                     <img src="/triangle.png" alt="" className="w-3 flex "/>
                  </div>
                  
               </div>
               
             <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16 h-12  ${params === "mentors"? "bg-red-600": "bg-black"}`}>
             <Link to= {`/mentors/${currentUser._id}`}>          <div>
                     <img src="/mentors_cell.png" alt="" className="w-7"/>
                  </div></Link>
                  <Link to= {`/mentors/${currentUser._id}`}>     <div className="text-[13px]">
                     Mentors Cell
                  </div></Link>
                  <div className={`absolute left-[276px] ${params !== "mentors"? "hidden": "visible"}`}>
                     <img src="/triangle.png" alt="" className="w-3 flex "/>
                  </div>
               </div>
                
               <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16  ${params === "chief_mentors"? "bg-red-600": "bg-black"}`}>
               <Link to= {`/chief_mentors/${currentUser._id}`}>            <div>
                     <img src="/chief_mentors.png" alt="" className="w-7"/>
                  </div></Link>
                  <Link to= {`/chief_mentors/${currentUser._id}`}>      <div className="text-[13px]">
                     Chief Mentorss
                  </div></Link>
                  <div className={`absolute left-[276px] ${params !== "chief_mentors"? "hidden": "visible"}`}>
                     <img src="/triangle.png" alt="" className="w-3 flex "/>
                  </div>
               </div>
               <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16 ${params === "resources"? "bg-red-600": "bg-black"}`}>
               <Link to= {`/resources/${currentUser._id}`}>       <div>
                     <img src="/study_resouces.png" alt="" className="w-7"/>
                  </div></Link>
                  <Link to= {`/resources/${currentUser._id}`}>      <div className="text-[13px]">
                     Study resources
                  </div></Link>
                  <div className={`absolute left-[276px] ${params !== "resources"? "hidden": "visible"}`}>
                     <img src="/triangle.png" alt="" className="w-3 flex "/>
                  </div>
               </div>
               <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16 ${params === "calendar"? "bg-red-600": "bg-black"}`}>
               <Link to= {`/calendar/${currentUser._id}`}>      <div>
                     <img src="/calendar.png" alt="" className="w-7"/>
                  </div></Link>
                  <Link to= {`/calendar/${currentUser._id}`}>   <div className="text-[13px]">
                     Calendar
                  </div></Link>
                  <div className={`absolute left-[276px] ${params !== "calendar"? "hidden": "visible"}`}>
                     <img src="/triangle.png" alt="" className="w-3 flex "/>
                  </div>
               </div>
               <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16  ${params === "sessions"? "bg-red-600": "bg-black"}`}>
               <Link to= {`/sessions/${currentUser._id}`}>      <div>
                     <img src="/sessions.png" alt="" className="w-7"/>
                  </div></Link>
                  <Link to= {`/sessions/${currentUser._id}`}>       <div className="text-[13px]">
                     Your Sessions
                  </div></Link>
                  <div className={`absolute left-[276px] ${params !== "sessions"? "hidden": "visible"}`}>
                     <img src="/triangle.png" alt="" className="w-3 flex "/>
                  </div>
               </div>
               <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16  ${params === "ai"? "bg-red-600": "bg-black"}`}>
               <Link to= {`/ai/${currentUser._id}`}>      <div>
                     <img src="/AI.png" alt="" className="w-7"/>
                  </div></Link>
                  <Link to= {`/ai/${currentUser._id}`}>       <div className="text-[13px]">
                     AI ScholarsBot Pro
                  </div></Link>
                  <div className={`absolute left-[276px] ${params !== "ai"? "hidden": "visible"}`}>
                     <img src="/triangle.png" alt="" className="w-3 flex "/>
                  </div>
               </div>
               <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16  ${params === "test"? "bg-red-600": "bg-black"}`}>
               <Link to= {`/test/${currentUser._id}`}>          <div>
                     <img src="/Test_Series.png" alt="" className="w-7"/>
                  </div></Link>
                  <Link to= {`/test/${currentUser._id}`}>        <div className="text-[13px]">
                     Test Series
                  </div></Link>
                  <div className={`absolute left-[276px] ${params !== "test"? "hidden": "visible"}`}>
                     <img src="/triangle.png" alt="" className="w-3 flex "/>
                  </div>
               </div>
               <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16  ${params === "dcc"? "bg-red-600": "bg-black"}`}>
               <Link to= {`/dcc/${currentUser._id}`}>       <div>
                     <img src="/support.png" alt="" className="w-7"/>
                  </div></Link>
                  <Link to= {`/dcc/${currentUser._id}`}>      <div className="text-[13px]">
                     Dcc (Doubt Clearing Cell)
                  </div></Link>
                  <div className={`absolute left-[276px] ${params !== "dcc"? "hidden": "visible"}`}>
                     <img src="/triangle.png" alt="" className="w-3 flex "/>
                  </div>
               </div>
               <div className={`flex gap-6 justify-start items-center w-full p-2 pl-16 ${params === "support"? "bg-red-600": "bg-black"}`}>
               <Link to= {`/support/${currentUser._id}`}>       <div>
                     <img src="/DCC.png" alt="" className="w-7"/>
                  </div></Link>
                  <Link to= {`/support/${currentUser._id}`}>      <div className="text-[13px]">
                     Support
                  </div></Link>
                  <div className={`absolute left-[276px] ${params !== "support"? "hidden": "visible"}`}>
                     <img src="/triangle.png" alt="" className="w-3 flex "/>
                  </div>
               </div>
               </div>
               
             </div>
        </div>
    </>
}
export default Menu