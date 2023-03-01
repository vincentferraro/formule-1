import React from 'react'
import TeamCard from './teamCard'

function TeamPresentation({ data }) {
    return (
        <div class="flex-col w-1/2 border-2 border-black">
            <div>
                <TeamCard team={data} />
            </div>

        </div>
    )
}

export default TeamPresentation