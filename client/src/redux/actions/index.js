import axios from "axios";

const POST_POKEMON = "POST_POKEMON";

const ERROR_GET_POKEMON_NAME = "ERROR_GET_POKEMON_NAME";

const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
const GET_POKEMON_ID = "GET_POKEMON_ID";
const GET_POKEMON_NAME = "GET_POKEMON_NAME";
const GET_POKEMON_TYPE = "GET_POKEMON_TYPE";
const GET_TYPES = "GET_TYPES";

//acces at home
const SET_ACCES_TRUE = "SET_ACCES_TRUE";
const SET_ACCES_FALSE = "SET_ACCES_FALSE";

//get pokemons by db
const GET_POKEMON_ORIGIN_DB = "GET_POKEMON_ORIGIN_DB";

//order the cards
const ORDER_HIGHT = "ORDER_HIGHT";
const ORDER_LOW = "ORDER_LOW";
const ORDER_ORIGINAL = "ORDER_ORIGINAL";
const ORDER_ALF_A_TO_Z = "ORDER_ALF_A_TO_Z";
const ORDER_ALF_Z_TO_A = "ORDER_ALF_Z_TO_A";
const ORDER_ALF_DEFAULT = "ORDER_ALF_DEFAULT";
const SET_PAGES = "SET_PAGES";
const SET_INPUT = "SET_INPUT"

export {
  GET_ALL_POKEMONS,
  GET_POKEMON_ID,
  GET_POKEMON_NAME,
  GET_POKEMON_TYPE,
  GET_TYPES,
  SET_ACCES_FALSE,
  SET_ACCES_TRUE,
  GET_POKEMON_ORIGIN_DB,
  ORDER_HIGHT,
  ORDER_LOW,
  ORDER_ORIGINAL,
  ORDER_ALF_A_TO_Z,
  ORDER_ALF_Z_TO_A,
  ORDER_ALF_DEFAULT,
  SET_PAGES,
  SET_INPUT,
  POST_POKEMON,
  ERROR_GET_POKEMON_NAME,
};

export const getTypes = () => async (dispatch) => {
  const resolve = await fetch("http://localhost:3001/types");
  const data = await resolve.json();
  return dispatch({ type: GET_TYPES, payload: data });
};

export const getAllPokemons = () => async (dispatch) => {
  const resolve = await fetch("http://localhost:3001/pokemons");
  const data = await resolve.json();
  return dispatch({ type: GET_ALL_POKEMONS, payload: data });
};

export const getPokemonsByID = (id) => async (dispatch) => {
  const resolve = await fetch(`http://localhost:3001/pokemons/${id}`);
  const data = await resolve.json();
  return dispatch({ type: GET_POKEMON_ID, payload: data });
};

export const getPokemonByName = (name) => async (dispatch) => {
  try {
    const resolve = await fetch(`http://localhost:3001/pokemons?name=${name}`);
    const data = await resolve.json();
    return dispatch({ type: GET_POKEMON_NAME, payload: data });
  } catch {
    return dispatch({ type: ERROR_GET_POKEMON_NAME });
  }
};

//acces en la pagina de inicio.
export const accesTrue = () => {
  return { type: SET_ACCES_TRUE };
};
export const accesFalse = () => {
  return { type: SET_ACCES_FALSE };
};

//Obtengo los pokemons de la db
export const getPokemonOfDb = () => {
  return { type: GET_POKEMON_ORIGIN_DB }
};

export const getPokemonsForTypes = (payload) => ({
  type: GET_POKEMON_TYPE,
  payload,
});

export const orederOriginal = () => ({ type: ORDER_ORIGINAL });
export const orederHigth = () => ({ type: ORDER_HIGHT });
export const orederlow = () => ({ type: ORDER_LOW });

export const resetOrederAlf = () => ({ type: ORDER_ALF_DEFAULT });
export const order_A_Z = () => ({ type: ORDER_ALF_A_TO_Z });
export const order_Z_A = () => ({ type: ORDER_ALF_Z_TO_A });

export const createPokemon = (pokemonCreated) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3001/pokemons", pokemonCreated);
    alert(`Se creo a ${response.data.name} con exito`)
  } catch (error) {
    alert("No se a creado el pokemon, nombre repetido")
  }
};

export const setPagina = (payload)=> {
  return ({type: SET_PAGES, payload})
}
export const setInput = (payload) => ({type: SET_INPUT, payload})