import { useState } from "react";
import toast from "react-hot-toast"

export default function Pricing() {
  const[monthYear , setMonthYear] = useState("monthly");

  const handle_plane = () => {
    toast.success("clicked");
  }

  return (
    <div className="text-center bg-[#F9F9FB]">
      <h1 className="text-[40px] py-4 capitalize"> plans & <span className=' text-[#00B7C1]' >pricing</span> </h1>
      <p className="text-[#62636C] text-[18px]">Looking for advanced features? Check out our latest plans</p>
      <div className=" mt-10 w-[220px] h-[40px] bg-white rounded-full flex items-center shadow-md mx-auto">
            <button onClick={() => setMonthYear("monthly")} className={`  hover:cursor-pointer flex-1 h-full rounded-full text-[10px]   font-medium ${monthYear=== 'monthly'? 'bg-[#00B7C1] text-white' : 'text-[#62636C]'}`}>
              Monthly
            </button>
            <button onClick={() => setMonthYear("Yearly")} className={`hover:cursor-pointer flex-1 h-full  text-[10px] font-medium
              ${monthYear === 'Yearly'? 'bg-[#00B7C1] text-white rounded-3xl' : 'text-[#62636C]'}`}>
              Yearly
            </button>
    </div>
    <div className=" flex xl:flex-row  mt-44 pb-44 justify-center flex-col items-center">
        <div className="bg-white shadow-2xl text-left px-10 py-12  w-[50%] xl:w-[25%] rounded-2xl hover:border-3 hover:border-[#00B7C1]">
        <div className="">
          <h3 className="capitalize text-[28px] font-medium">basic</h3>
          <p className="text-[#62636C] py-4">Create interactive forms that connect to your workflow</p>
          <div>
            <p className="text-[#62636C]"> <span className="text-black text-[57px] font-[inter] font-medium">{monthYear === 'monthly'? '$25' : '$240'}</span> / {monthYear === 'monthly'? 'Monthly' : 'Yearly'}</p>
            <p className="font-medium">what's included</p>
            <div className="text-[#1E1F24]">
              <div className="">
                <div className=" mt-5">
                  <span className="bg-[#00B7C1] py-1 px-2 rounded-[50%] me-3"><i className=" fa-solid fa-check text-white"></i></span>
                  <span>100 response</span>
                </div>
                
                <div className="my-5">
                  <span className="me-3 bg-[#00B7C1] py-1 px-2 rounded-[50%]"><i className=" fa-solid fa-check text-white"></i></span>
                  <span>1 user</span>
                </div>

                <div className="mb-5">
                  <span className="me-3 bg-[#00B7C1] py-1 px-2 rounded-[50%]"><i className=" fa-solid fa-check text-white"></i></span>
                  <span>Unlimited surveyland</span>
                </div>

                <div className="mb-5">
                  <span className="me-3 bg-[#00B7C1] py-1 px-2 rounded-[50%]"><i className=" fa-solid fa-check text-white"></i></span>
                  <span>Unlimited questions</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      <button onClick={handle_plane} className="bg-[#00B7C1] text-white w-full font-bold capitalize rounded-full py-5 hover:cursor-pointer">choose plan</button>
        </div>

        <div className="bg-[#00B7C1] text-left px-10 py-12 my-10 xl:my-0 w-[50%] xl:w-[25%] rounded-2xl xl:mx-10 xl:relative xl:bottom-14 text-white hover:border-3 hover:border-white">
        <div className="">
          <h3 className="capitalize text-[28px] font-medium">plus</h3>
          <p className="py-4">Make your forms more beautiful and on-brand</p>
          <div>
            <p className=""> <span className=" text-[57px] font-[inter] font-medium">{monthYear === 'monthly'? '$50' : '$480'} </span> / {monthYear === 'monthly'? 'Monthly' : 'Yearly'}</p>
            <p className="font-medium">what's included</p>
            <div className="">
              <div className="">
                <div className=" mt-5">
                  <span className="bg-white py-1 px-2 rounded-[50%] me-3"><i className=" fa-solid fa-check text-[#00B7C1]"></i></span>
                  <span>10,000 response</span>
                </div>
                
                <div className="my-5">
                  <span className="me-3 bg-white py-1 px-2 rounded-[50%]"><i className=" fa-solid fa-check text-[#00B7C1]"></i></span>
                  <span>3 user</span>
                </div>

                <div className="mb-5">
                  <span className="me-3 bg-white py-1 px-2 rounded-[50%]"><i className=" fa-solid fa-check text-[#00B7C1]"></i></span>
                  <span>Everything in Basic</span>
                </div>

                <div className="mb-5">
                  <span className="me-3 bg-white py-1 px-2 rounded-[50%]"><i className=" fa-solid fa-check text-[#00B7C1]"></i></span>
                  <span>Drop-off rates</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      <button onClick={handle_plane} className="bg-white text-[#00B7C1] w-full font-bold capitalize rounded-full py-5 hover:cursor-pointer">choose plan</button>
        </div>

        <div className="bg-white shadow-2xl text-left px-10 py-12  w-[50%] xl:w-[25%] rounded-2xl hover:border-3 hover:border-[#00B7C1]">
        <div className="">
          <h3 className="capitalize text-[28px] font-medium">business</h3>
          <p className="text-[#62636C] py-4">Analyze performance and do more with your data</p>
          <div>
            <p className="text-[#62636C]"> <span className="text-black text-[57px] font-[inter] font-medium">{monthYear === 'monthly'? '$83' : '$804'}</span> / {monthYear === 'monthly'? 'Monthly' : 'Yearly'}</p>
            <p className="font-medium">what's included</p>
            <div className="text-[#1E1F24]">
              <div className="">
                <div className=" mt-5">
                  <span className="bg-[#00B7C1] py-1 px-2 rounded-[50%] me-3"><i className=" fa-solid fa-check text-white"></i></span>
                  <span>10,000 response</span>
                </div>
                
                <div className="my-5">
                  <span className="me-3 bg-[#00B7C1] py-1 px-2 rounded-[50%]"><i className=" fa-solid fa-check text-white"></i></span>
                  <span>5 user</span>
                </div>

                <div className="mb-5">
                  <span className="me-3 bg-[#00B7C1] py-1 px-2 rounded-[50%]"><i className=" fa-solid fa-check text-white"></i></span>
                  <span>Everything in Plus</span>
                </div>

                <div className="mb-5">
                  <span className="me-3 bg-[#00B7C1] py-1 px-2 rounded-[50%]"><i className=" fa-solid fa-check text-white"></i></span>
                  <span>Conversion tracking</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      <button className="bg-[#00B7C1] text-white w-full font-bold capitalize rounded-full py-5 hover:cursor-pointer" onClick={handle_plane}>choose plan</button>
        </div>                           
                                                     
    </div>             

    </div>
  );
}
