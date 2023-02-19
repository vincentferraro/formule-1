import React from "react";


function Driver(props) {
    return (
        <div>
            <img  src={props.picture} alt={props.name} />
            <p>Name: { props.name } </p>
            <p>Ecurie: {props.ecurie} </p>
        </div>
    )
}

export default Driver