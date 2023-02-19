import React from "react";

function ButtonLink(props) {
    return (
        <li><a href={props.link}>{props.title}</a></li>
    )
}

export default ButtonLink