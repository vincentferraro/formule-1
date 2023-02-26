import React from 'react'


function TeamCard({team}) {
    return (
        <div>
            <div>
                <img src={team.picture.team} alt={team.name} />
            </div>
            <div>
                <img src={team.picture.car} alt="" />
            </div>
            <div>
                <p>Name: {team.name}</p>
                <p>Base: {team.base}</p>
                <p>World championships: {team.championships}</p>
                <p>Team Chief: {team.chief}</p>
            </div>
        </div>
    )
}

export default TeamCard