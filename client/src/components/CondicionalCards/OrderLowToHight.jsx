import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
const OrderLowToHight = ({ pagina, porPagina }) => {
  const {pokemons} = useSelector((state) => state);

  return (
    <>
      {
      // (!a_z && !z_a) ? 
      pokemons
      .sort((a, b) => - a.attack + b.attack)
        //paginado
        .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
        .map((p, i) => (
          //renderizado de cards
          <Card
            key={i}
            name={p.name}
            image={p.image}
            types={p.types}
            id={p.id}
            attack={p.attack}
          />
        ))
        }
    </>
  );
};

export default OrderLowToHight;
