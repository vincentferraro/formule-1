import React from 'react'

function TeamsList({teams}) {
    
    console.log(teams)
    return (
        <div>
            <p>Test</p>
            {teams?.map(team => 
                
                <div> 
                    <p>{team.name}</p>
                    <img src={team.picture.logo} />
                </div>
            )}
        </div>
    )
}

export default TeamsList