import React from "react";
import Driver from "./driver";
import hamilton from "../../img/drivers/hamilton.jpeg"
import leclerc from "../../img/drivers/leclerc.jpeg"
import verstappen from "../../img/drivers/verstappen.jpeg"
function Drivers() {
    const drivers = [{
        name: "Lewis Hamilton",
        ecurie: "Mercedes",
        picture: hamilton
    },{
        name: "Charles Leclerc",
        ecurie: "Ferrari",
        picture:leclerc
        },
    {
        name: "Max Verstappen",
        ecurie: "Red Bull Racing",
        picture:verstappen
    }]
    return (
        <div>
        <h2>Drivers</h2>
        <div>
                {drivers.map(driver => <Driver picture={driver.picture} name={driver.name} ecurie={driver.ecurie} />)}
        </div>
        </div>
    )
}

export default Drivers