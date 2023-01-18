import React from "react";
import pikaError from "../../img/notFoundPika.png";
import style from "./notFoundPokemons.module.css";
const NotFoundPokemons = () => {
  return (
    <figure className={style.figure}>
      <img src={pikaError} alt="Cargando" className={style.img} />
      <figcaption className={style.fig_cap}>
        Pokemons no enocntrados.
      </figcaption>
    </figure>
  );
};

export default NotFoundPokemons;
