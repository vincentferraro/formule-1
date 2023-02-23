import React from "react";
import Driver from "./driver";

function Drivers({drivers, handleClick}) {
    console.log("drivers", drivers)
    return (
        <div class= "w-3/6 h-screen border-solid border-2 ">
        <h2>Drivers</h2>
        <div class="flex flex-col justify-center items-center w-100% border-solid border-2 border-red-300" >
                {drivers?.map(driver => <Driver class="border-black"handleClick={handleClick} driver={driver} />)}
        </div>
        </div>
    )
}

export default Drivers