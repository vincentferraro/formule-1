import React from "react";


function Driver({ driver,handleClick }) {
    return (
        <div class="w-1/2 h-20 border-stone-200 bg-neutral-800 border-4 border-solid rounded-lg flex flex-row m-1" onClick={handleClick} id={driver.number}
            key={driver.number}>
            <div> <img  class="w-16 h-16"src={driver.picture} alt={driver.name} /> </div>
            <div class="w-full flex flex-col justify-center items-center border-red-50 border-solid border-2">
                <p class="w-3/4 block bg-neutral-700 text-stone-300 m-1 radiurs rounded">Name: { driver.name } </p>
                <p class="w-3/4 block bg-neutral-700 text-stone-300 rounded">Team: {driver.team} </p>
            </div>
            
        </div>
    )
}

export default Driver