import { Link } from "react-router-dom";

function Slide(obj){
    console.log(obj.obj.title)
    return <>
        <div className={`w-full h-56 rounded-3xl font-customFont flex justify-center`} style={{
            backgroundImage: `url('/dashboard_bc.png')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
        }}>
            <div className="flex w-full justify-between pl-1 pr-1">
                <div className={`left flex flex-col ${obj.obj.index === "0" ? "gap-6" : "gap-2"} p-3 justify-between`}>
                  <div className="flex flex-col">
                    <div className="text-tahiti-300 text-[25px] font-bold text-start">
                        {obj.obj.title}
                    </div>
                    <div className="text-white text-[15px] font-bold w-[680px]">
                        <div className="">{obj.obj.desc.map((item)=>{
                            return <div className="text-start flex gap-1">
                            <span className="">*</span>{item}</div>
                        })}
                        </div>
                    </div>
                  </div>
                 <Link to="/mentors"><div className="flex justify-center bg-white p-2 rounded-xl w-28 font-bold">
                    Book Now
                  </div></Link> 
                </div>
                <div className="right p-2 pt-6">
                      <img src={`${obj.obj.img}`} alt="" className="w-56 h-44" />
                </div>
            </div>
        </div>
    </>
}

export default Slide;