import React from "react";
import Image from "next/image";
import mascot1 from "@/public/mascots/class1.png"
import mascot2 from "@/public/mascots/class2.png"
import mascot3 from "@/public/mascots/class3.png"
import mascot4 from "@/public/mascots/class4.png"
import mascot5 from "@/public/mascots/class5.png"
function Courses() {
  return (
    <div id="courses" className="flex flex-col items-center justify-center w-full gap-4 px-8 h-screen ">
      <h1 className="font-bold text-5xl text-center">Courses</h1>
      <div className="flex flex-row justify-center bg-white gap-4 w-full ">
            <div className="bg-indigo-50 w-full md:max-w-xs flex-1 rounded-2xl p-5">
              <div className="flex flex-row">
              <Image className="w-[40px] h-[40px] ml-4 my-4" alt="mascot1" src={mascot1}/>
              <p className="text-center font-semibold text-2xl text-indigo-900 my-5 mr-5 ml-2">
              Grade-1</p>
              </div>
              <br></br>
              <ul className="list-disc  px-10 text-xl pb-10">
                <li>Numbers 1 to 100</li>
                <li>Basic addition and subtraction</li>
                <li>Comparison of numbers</li>
                <li>Basic shapes</li>
              </ul>
            </div>
            <div className="bg-indigo-50 w-full md:max-w-xs  flex-1 rounded-2xl  p-5">
              <div className="flex flex-row">
              <Image className="w-[40px] h-[40px] ml-4 my-4" alt="mascot2" src={mascot2}/>
              <p className="text-center font-semibold text-2xl text-indigo-900 my-5 mr-5 ml-2">
              Grade-2</p>
              </div>
              <ul className="list-disc  px-10 text-xl pb-10">
                <li>Addition and subtraction of 2-digit and 3-digit numbers</li>
                <li>
                Basic multiplication and division
                </li>
                <li>Measurement (length, weight, capacity, time and money)
                </li>
              </ul>
            </div>
            <div className="bg-indigo-50 w-full md:max-w-xs  flex-1 rounded-2xl p-5 ">
              <div className="flex flex-row">
              <Image className="w-[50px] h-[50px] ml-4 my-4" alt="mascot3" src={mascot3}/>
              <p className="text-center font-semibold text-2xl text-indigo-900 my-5 mr-5 ml-2">
              Grade-3</p>
              </div>
             <ul className="list-disc  px-10 text-xl pb-10">
              <li>Numbers up to 10,000</li>
              <li>Introduction to basic fractions</li>
              <li>Measurement of length, mass, capacity, and time</li>
              <li>Introduction to geometry</li>
             </ul>
            </div>
            <div className="bg-indigo-50 w-full md:max-w-xs rounded-2xl p-5">
            <div className="flex flex-row">
            <Image className="w-[40px] h-[40px] ml-4 my-4" alt="mascot4" src={mascot4}/>
              <p className="text-center font-semibold text-2xl text-indigo-900 my-5 mr-5 ml-2">
              Grade-4</p>
              </div>
             <ul className="list-disc  px-10 text-xl pb-10">
              <li>Advanced fractions</li>
              <li>Introduction to decimals</li>
              <li>measurement (length, mass, capacity, time, temperature)</li>
              <li>basic geometry (perimeter, area)</li>
             </ul>
            </div>
            <div className="bg-indigo-50 w-full md:max-w-xs rounded-2xl p-5">
            <div className="flex flex-row">
            <Image className="w-[40px] h-[40px] ml-4 my-4" alt="mascot5" src={mascot5}/>
              <p className="text-center font-semibold text-2xl text-indigo-900 my-5 mr-5 ml-2">
              Grade-5</p>
              </div>
             <ul className="list-disc  px-10 text-xl pb-10">
              <li>Operations with whole numbers, fractions, and decimals </li>
              <li>Geometric shapes and concepts </li>
              <li>Basic measurement operations</li>
             </ul>
            </div>
      </div>
    </div>
  );
}
export default Courses;
