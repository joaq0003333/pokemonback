import React from 'react'
import style from "./loadingPokemons.module.css"
import gifPika from "../../img/pikachu-running.gif";

const LoadingPokemons = () => {
  return (
    <figure className={style.figure}>
    <img src={gifPika} alt="Cargando" className={style.img} />
    <figcaption className={style.fig_cap}>
      Cargando Pokemons ...
    </figcaption>
  </figure>
  )
}

export default LoadingPokemons
