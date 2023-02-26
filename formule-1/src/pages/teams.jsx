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

function TeamsPage() {

    const teams = [{
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
    

    return (

        <div>
            <h1>Teams</h1>
            <div>
                <p>Test</p>
                <TeamsList teams={teams} />
                {/* <TeamPresentation  /> */}
            </div>
            
        </div>
    )
}

export default TeamsPage