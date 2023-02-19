import React from "react";


function Driver({ driver,handleClick }) {
    return (
        <div onClick={handleClick} id={driver.number}
        key={driver.number}>
            <img  src="ok" alt={driver.name} />
            <p>Name: { driver.name } </p>
            <p>Team: {driver.team} </p>
        </div>
    )
}

export default Driver