import React from "react";
import {Link} from "react-router-dom"

export default function itemCard({cliente, escenario, linkVideo}) {

  return (
          <div className=" w-2/3 overflow-hidden tp-1 bg-gray-800 rounded-lg shadow-lg md:w-1/3">
            <Link to={cliente}>
            <div>
              <h2 className="font-bold capitalize text-xl pt-1 md:text-3xl">{cliente}</h2>
              <span className="font-semibold text-sm md:text-md">Escenario: </span><span className="text-xs md:text-md">{escenario}</span>
              <video className="pt-2"><source src={linkVideo} /></video>
            </div>
            </Link>
          </div>
  );
}
