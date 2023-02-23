import React from "react";
import Drivers from "../component/drivers/drivers";

import DriverPresentation from "../component/drivers/driverPresentation";
import hamilton from "../img/drivers/hamilton.jpeg"
import leclerc from "../img/drivers/leclerc.jpeg"
import verstappen from "../img/drivers/verstappen.jpeg"

import { useState } from "react";
function DriversPage() {

    const drivers = [{
        name: "Lewis Hamilton",
        team: "Mercedes",
        picture: hamilton,
        number:44
    },{
        name: "Charles Leclerc",
        team: "Ferrari",
        picture: leclerc,
        number:16
        },
    {
        name: "Max Verstappen",
        team: "Red Bull Racing",
        picture: verstappen,
        number:1
        },
    {
        name: "Lewis Hamilton",
        team: "Mercedes",
        picture: hamilton,
        number:42
    },{
        name: "Charles Leclerc",
        team: "Ferrari",
        picture: leclerc,
        number:13
        },
    {
        name: "Max Verstappen",
        team: "Red Bull Racing",
        picture: verstappen,
        number:12
        }]
    
    const [driver, setDriver] = useState(null)

    const handleClick = (event) => {
        for (const driver of drivers) {
            if (driver.number === parseInt(event.target.id)) {
                setDriver(driver)
            }

        }
        console.log('driversetup', driver)
    }
    //
    // TO DO: Fix handle Click: setDriver when click on div from Driver component
    return (
        <div class="flex">
            <Drivers handleClick={handleClick} drivers={drivers} />
            <DriverPresentation driverData={driver} />
        </div>

    )
}
export default DriversPage