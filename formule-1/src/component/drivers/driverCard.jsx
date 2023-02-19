import React from "react";


function DriverCard(driver) {
    return (
        <div>
            <img src="" alt="" />
            <div>
                <ul>
                    <li>{driver.name}</li>
                    <li>{driver.number}</li>
                </ul>
                <ul>
                    <li>Team:{driver.team} </li>
                    <li>Country: {driver.country}</li>
                    <li>Podiums: {driver.podiums}</li>
                    <li>Win: {driver.wins}</li>
                    <li>World Championships: {driver.championships}</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default DriverCard