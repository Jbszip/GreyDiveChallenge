import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <h1 className="font-bold mx-2 text-left text-xl md:text-2xl xl:text-3xl"><Link to='/'>Greydive Challenge</Link></h1>
        </nav>
    )
}