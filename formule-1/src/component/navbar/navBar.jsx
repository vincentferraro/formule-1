import React from "react";
import ButtonLink from "./buttonLink";
import { Link } from "react-router-dom";
function NavBar() {
    const datas = [
        {
            title: "Home",
            link: "/home"
        },
        {
            title: "Drivers",
            link: "/drivers"
        },
        {
            title: "Ecuries",
            link: "/ecuries"
        },
    ]

    const handleClick = (event) => {
        
    }
    return (
        <ul>
            {datas.map(data => { return <Link to={data.title}>{data.title}</Link> })}
        </ul>
    )
}

export default NavBar