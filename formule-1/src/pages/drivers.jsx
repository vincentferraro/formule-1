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
        }]
    
    const [driver, setDriver] = useState(null)

    const handleClick = (event) => {
        console.log("Click", event.target.id)
        console.log(parseInt(event.target.id))
        const driver = drivers.map(driver => { if (driver.number === parseInt(event.target.id)) { return driver } })
        console.log(driver)
        setDriver(drivers.find(driver => driver.number === parseInt(event.target.id)))
        console.log("DriverModified",driver)
    }
    //
    // TO DO: Fix handle Click: setDriver when click on div from Driver component
    return (
        <div>
            <Drivers handleClick={handleClick} drivers={drivers} />
            <DriverPresentation driversData={drivers} />
        </div>

    )
}
export default DriversPage