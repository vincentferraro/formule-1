import React from "react";
import TeamsList from '../component/teams/teamslist'
import TeamPresentation from '../component/teams/teamPresentation'

//Images 
import mercedesLogo from '../img/teams/mercedes_logo.png'
import mercedesCar from '../img/teams/mercedes_car.png'
import redbullLogo from '../img/teams/red_bull_logo.png'
import redbullCar from '../img/teams/red_bull_car.png'
import ferrariLogo from '../img/teams/ferrari_logo.png'
import ferrariCar from '../img/teams/ferrari_car.png'

// useState
import { useState } from "react";

function TeamsPage() {

    const teams = [{
        id:1,
        name: 'Mercedes',
        chief: 'Toto Wolff',
        picture: {
            logo: mercedesLogo,
            car: mercedesCar
        },
        championships: 8,
        base: 'Brackley, United Kingdom'
    },
        {
            id:2,
        name: 'Red Bull',
        chief: 'Christian Horner',
        picture: {
            logo: redbullLogo,
            car: redbullCar
        },
        championships: 5,
        base: 'Milton Keynes, United Kingdom'
        },
        {
            id:3,
        name: 'Ferrari',
        chief: 'Frederic Vasseur',
        picture: {
            logo: ferrariLogo,
            car: ferrariCar
        },
        championships: 16,
        base: 'Maranello, Italy'
        },

    ]
    const [team, setTeam] = useState(null)
    
    const handleClick = (event) => {
        teams.forEach(team => {
            console.log(team)
            if (event.target.id == team.id) {
                setTeam(team)
            }
        })
    }

    return (

        <div class="flex-col w-screen h-screen border-2 border-black">
            <div class="flex w-screen">
                <TeamsList teams={teams} handleClick={handleClick} />
                <TeamPresentation data={team} /> 
            </div>
            
        </div>
    )
}
// TO DO: Continue HandleClick function
export default TeamsPage