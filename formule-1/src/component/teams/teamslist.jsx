import React from 'react'
import TeamButton from './teamButton'
function TeamsList({teams, handleClick}) {
    return (
        <div class="flex flex-col h-screen w-1/2 border-2 border-black items-center ">
            {teams?.map(team => 
                <TeamButton team={team} handleClick={handleClick} />
            )}
        </div>
    )
}

export default TeamsList