import React from "react";
import Image from "next/image";
import rainbowbg from "@/public/rainbow background.png"
function Filler1()
{
    return (
        <div>
            <Image unoptimized={true} alt="rainbow bg" src={rainbowbg}/>
        </div>
    )
}
export default Filler1;