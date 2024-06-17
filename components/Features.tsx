import React from "react";
function Features()
{
    return(
        <div>
            <h1 className="font-bold mt-10 text-5xl text-center">Features</h1>
            <br></br>
            <div className="flex flex-row justify-evenly w-full bg-white gap-10 mt-10">
               <div className="bg-indigo-50  w-[300px] h-[400px] rounded-2xl ">
                <p className="text-center font-semibold text-2xl text-indigo-900 m-5">Feature 1</p>
                </div>
               <div className="bg-indigo-50  w-[300px] h-[400px] ] rounded-2xl ">
                <p className=" text-center font-semibold text-2xl text-indigo-900 m-5">Feature 2</p></div>
               <div className=" bg-indigo-50  w-[300px] h-[400] rounded-2xl">
                <p className="text-center font-semibold text-2xl text-indigo-900 m-5">Feature 3</p></div>
               <div className="bg-indigo-50  w-[300px] h-[400px] rounded-2xl"> 
                <p className="text-center font-semibold text-2xl text-indigo-900 m-5">Feature 4</p></div>
            </div>
        </div>
    );
}
export default Features;