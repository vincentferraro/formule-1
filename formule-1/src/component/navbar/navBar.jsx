import React from "react";
import ButtonLink from "./buttonLink";
import { Link } from "react-router-dom";
function NavBar() {
    const datas = [
        {
            title: "Drivers",
            link: "/drivers"
        },
        {
            title: "Teams",
            link: "/teams"
        },
        {
            title: "Races",
            link: "/races"
        },
    ]
    return (
        <ul>
            <li> <Link to="/home"><img src="" alt="formule1" /></Link></li>
            {datas.map(data => { return <Link to={data.title}>{data.title}</Link> })}
        </ul>
    )
}

export default NavBar