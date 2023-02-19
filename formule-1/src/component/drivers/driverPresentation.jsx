import React from "react";
import DriverCard from "./driverCard";
import { useState } from "react";
function DriverPresentation(driverData ) {

    const [driver, setDriver] = useState(null)
    
    return (
        <div>
            {driver?<DriverCard
                driver={driverData}
            />:<h1>Click on Driver to show this data</h1>}
            
        </div>
    )
}

export default DriverPresentation