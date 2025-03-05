function Slide2(obj){
    return <>
    <div className="font-customFont text-white font-bold text-start">
       <div className="right p-2">
                      <img src={`${obj.obj.img}`} alt="" className="w-96 h-72" />
                </div>
                <div className="text-2xl text-center">
                    {obj.obj.title}
                </div>
                <div className="text-center">
                    {obj.obj.desc}
                </div>
                </div>
    </>
}
export default Slide2