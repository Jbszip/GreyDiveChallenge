import React from 'react';
import data from '../data/db.json'
import ItemCard from './itemCard';

export default function Listado() {
  return (
    <>
      <h1 className="uppercase italic text-xl font-bold my-5 md:text-3xl">
        Tests realizados
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {data.map((res) => {
          return (
            <ItemCard
              key={res.idVideo}
              cliente={res.cliente}
              escenario={res.escenario}
              linkVideo={res.linkVideo}
            />
          );
        })}
      </div>
    </>
  );
}
