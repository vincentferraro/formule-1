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
    return (<div class="flex h-24 w-full bg-red-500 text-white place-content-between">
         <ul class="flex space-x-5 ">
            <li class="bg-black align-middle"> <Link to="/home"><img src="" alt="formule1" /></Link></li>
            {datas.map(data => { return <Link class="bg-black text-4xl align-middle" to={data.title}>{data.title}</Link> })}
        </ul>
    </div>
       
    )
}

export default NavBar