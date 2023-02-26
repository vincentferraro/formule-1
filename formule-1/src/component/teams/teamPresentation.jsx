import React from 'react'
import TeamCard from './teamCard'

function TeamPresentation({ data }) {
    return (
        <div>
            <div>
                <TeamCard team={data} />
            </div>

        </div>
    )
}

export default TeamPresentation