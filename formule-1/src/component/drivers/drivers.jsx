import React from "react";
import Driver from "./driver";

function Drivers({drivers, handleClick}) {
    console.log("drivers", drivers)
    return (
        <div>
        <h2>Drivers</h2>
        <div>
                {drivers?.map(driver => <Driver handleClick={handleClick} driver={driver} />)}
        </div>
        </div>
    )
}

export default Drivers