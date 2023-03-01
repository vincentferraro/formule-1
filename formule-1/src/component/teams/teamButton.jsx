import React from "react";

function TeamButton({team, handleClick}){
    return (
        
        <div id={team.id} class="flex w-3/4 border-2 border-black m-4" onClick={handleClick}> 
                    <div id={team.id} class="w-1/4 flex justify-center items-center">
                        <img id={team.id} class="w-20 h-20 bg-inherit" src={team.picture.logo} />
                    </div>
                    <div id={team.id}  class=" w-3/4 h-4/4 flex justify-center items-center border-2 border-red-50">
                        <p id={team.id} class="block text-5xl font-bold">{team.name}</p>
                    </div>
                    
                </div>
    )
}

export default TeamButton