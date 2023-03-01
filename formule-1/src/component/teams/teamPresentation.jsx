import React from 'react'
import TeamCard from './teamCard'

function TeamPresentation({ data }) {
    return (
        <div class="flex justify-center items-center w-1/2 border-2 border-black">
                <TeamCard team={data} />
        </div>
    )
}

export default TeamPresentation