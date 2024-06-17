import React from "react";
function Courses()
{
    return(
        <div >
            <h1 className="font-bold mt-0 text-5xl text-center">Courses</h1>
            <br></br>
            <div className="flex justify-evenly flex-row w-full bg-white gap-10 mt-10">
               <div className="bg-indigo-50  w-[300px] h-[400px] rounded-2xl ">
                <p className="text-center font-semibold text-2xl text-indigo-900 m-5">Grade-I</p></div>
               <div className="bg-indigo-50  w-[300px] h-[400px] rounded-2xl ">
                <p className=" text-center font-semibold text-2xl text-indigo-900 m-5">Grade-II</p></div>
               <div className=" bg-indigo-50  w-[300px] h-[400px] rounded-2xl">
                <p className="text-center font-semibold text-2xl text-indigo-900 m-5">Grade-III</p></div>
               <div className="bg-indigo-50  w-[300px] h-[400px] rounded-2xl"> 
                <p className="text-center font-semibold text-2xl text-indigo-900 m-5">Grade-IV</p></div>
               <div className="bg-indigo-50  w-[300px] h-[400px] rounded-2xl">
                <p className="text-center font-semibold text-2xl text-indigo-900 m-5">Grade-V</p></div> 
            </div>
        </div>
    );
}
export default Courses;