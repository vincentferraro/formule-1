import React from 'react'


function TeamCard({ team }) {
    console.log(team)
    return (team ? <div key={team.id} class="flex-col justify-center  w-11/12 h-4/6 border-2 border-violet-600">
            <div class="flex justify-center items-center w-2/2 h-2/6 border-2 border-red-50 ">
            {/* <img class=""src={team?.picture.logo} alt={team.name} /> */}
            <img src={team?.picture.car} alt={team?.name} />
            </div>
        <div class="flex-col h-4/6 bg-gray">
            <ul class="border-2 border-green-300 h-100 w-100 block flex-col justify-center items-center">
                <li class="flex"><p>Name:</p><p>{team?.name}</p> </li>
                <li class="flex">Base: {team?.base}</li>
                <li class="flex">World championships: {team?.championships}</li>
                <li class="flex">Team Chief: {team?.chief}</li>
            </ul>
            </div>
        </div>: <><p>Nothing</p></>
    )
}

export default TeamCard