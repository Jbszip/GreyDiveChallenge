import React from "react";
import data from "../data/db.json";
import { Link, useParams } from "react-router-dom";

export default function IndividualItem() {
  let { test } = useParams();
  let item = data.filter((item) => item.cliente === test);
  if(item[0]){
    return (
      <main>
        <div>
          <div className="text-left mx-auto w-3/4">
            <h1 className="font-bold italic capitalize text-2xl py-2 text-center md:text-4xl">
              Cliente: {item[0].cliente}
            </h1>
            <h2 className="font-bold inline text-md md:text-xl">Escenario: </h2>
            <span className="text-sm md:text-lg">{item[0].escenario}</span>
            <h3 className="text-lg font-semibold md:text-xl">
              Testeador: {item[0].testeador ? item[0].testeador : "Desconocido"}
            </h3>
            <span className="font-semibold text-xs text-left text-rose-300">
              Duración total del test: {item[0].timeTest}
            </span>
          </div>
          <video controls className="mx-auto h-3/4 w-3/4 py-2">
            <source src={item[0].linkVideo} />
          </video>
          <span className="font-bold italic uppercase">Transcripción:</span>
          <div className="mx-auto h-64 w-3/4 bg-gray-800 text-left contenido">
            {item[0].transcripcion.replaceAll("<br>", "\n")}
          </div>
          <div className="w-3/4 text-left mt-5 pb-5 mx-auto">
            <h3 className="font-bold italic uppercase text-center py-1 text-xl md:text-2xl underline">
              Tareas a realizar:
            </h3>
            <ol>
              {item[0].preguntas.map((tarea) => {
                return (
                  <li className="py-1">
                    <span className="font-semibold corte">
                      {tarea.texto.replaceAll("\\n", `\n`)}{" "}
                    </span>
                    <span className="italic text-sm text-rose-300">
                      Duración de la tarea: {tarea.tiempo}
                    </span>
                    <hr />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </main>
    );
  }
  return(
    <>
      <h1 className="uppercase italic font-bold text-lg my-10 md:text-4xl">Test Inexistente</h1>
      <span className="bg-slate-800 p-3 rounded-lg hover:bg-slate-600 uppercase"><Link to='/'>Vuelve al inicio</Link></span>
    </>
  )
}
