import React from "react";
import ButtonLink from "./buttonLink";

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
    return (
        <ul>
            {datas.map(data => { return <ButtonLink key={data.title} title={data.title} link={data.link} /> })}
        </ul>
    )
}

export default NavBar