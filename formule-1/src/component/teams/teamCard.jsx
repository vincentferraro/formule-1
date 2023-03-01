import React from 'react'


function TeamCard({ team }) {
    console.log(team)
    return (team ? <div key={team.id} class="flex-col justify-center align-middle w-1/2">
            <div class="w-2/4 h-2/4 ">
                <img src={team?.picture.logo} alt={team.name} />
            </div>
            <div>
                <img src={team?.picture.car} alt="" />
            </div>
            <div>
                <p>Name: {team?.name}</p>
                <p>Base: {team?.base}</p>
                <p>World championships: {team?.championships}</p>
                <p>Team Chief: {team?.chief}</p>
            </div>
        </div>: <><p>Nothing</p></>
    )
}

export default TeamCard