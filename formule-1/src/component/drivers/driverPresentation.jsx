import React from "react";
import DriverCard from "./driverCard";
import { useState } from "react";
function DriverPresentation({driverData} ) {

    
    
    return (
        <div class= "w-3/6 h-screen border-solid border-2 justify-center align-center ">
            {driverData?<DriverCard
                driver={driverData}
            />:<h1>Click on Driver to show this data</h1>}
            
        </div>
    )
}

export default DriverPresentation