import React from "react";
import Image from "next/image";
import bg1 from "@/public/background.png"
function Background()
{
    return(
        <div>
            <Image alt="background-kids" src={bg1}/>
        </div>
    )
}
export default Background;