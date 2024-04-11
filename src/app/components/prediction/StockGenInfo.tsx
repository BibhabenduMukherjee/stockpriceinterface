import React from 'react'

function StockGenInfo() {
  return (
    <div>
        <div className="">
        <div className=" mt-5 bg-slate-500   h-[400px] mx-auto">
             <div className="w-full p-2  flex flex-col   overflow-y-scroll">
                <div className=" flex flex-col p-2  bg-green-200  ">
                    <div className= "flex ">
                       <div className = 'w-[50px] h-[50]'>
                         <img src="/empty.png" alt="" />
                       </div>

                       <div className = 'w-[50px] h-[50]'>
                        <p className = "font-bold text-md">news title</p>
                       </div>

                    </div>
                     <p className="text-sm">
                        12/03/2024
                     </p>
                </div>
             </div>
            </div>
            <div className=" bg-slate-700 mt-5 h-[400px] mx-auto ">
              2
            </div>
        </div>
    </div>
  )
}

export default StockGenInfo