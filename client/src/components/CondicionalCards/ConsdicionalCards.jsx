import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const ConsdicionalCards = ({ pagina, porPagina }) => {
  const {pokemons, orderAlf} = useSelector((state) => state);
  const {a_z, z_a} = orderAlf
  return (
    <>
      {
        (!a_z && !z_a) ? 
      pokemons
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
        : a_z ? 
        pokemons
        // .sort((a, b) => a.attack - b.attack)
        .sort( (a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
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
        : z_a && 
        pokemons
        //paginado
        .sort( (a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          // a must be equal to b
          return 0;
        })
        .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
        // .sort((a, b) => a.attack - b.attack)
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

export default ConsdicionalCards;
