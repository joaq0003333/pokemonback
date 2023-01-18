import {
  GET_TYPES,
  GET_ALL_POKEMONS,
  GET_POKEMON_ID,
  GET_POKEMON_NAME,
  SET_ACCES_FALSE,
  SET_ACCES_TRUE,
  GET_POKEMON_TYPE,
  GET_POKEMON_ORIGIN_DB,
  ORDER_LOW,
  ORDER_HIGHT,
  ORDER_ORIGINAL,
  ORDER_ALF_A_TO_Z,
  ORDER_ALF_Z_TO_A,
  ORDER_ALF_DEFAULT,
  SET_PAGES,
  SET_INPUT,
  ERROR_GET_POKEMON_NAME,

} from "../actions/index.js";


const initialState = {
  foundPokemons: true,
  pokemons: [],
  access: false,
  pokemonId: {},
  types: [],
  order: {
    orderHiTolow: false,
    orderLowToHi: false,
  },
  orderAlf: {
    a_z: false,
    z_a: false
  },
  pages: 1,
  input: 1,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //caso que no encuentro un pokemon por name, cambio el estado de encontrado para renderizar imagen
    case ERROR_GET_POKEMON_NAME: 
    return {...state, foundPokemons: false, pokemons: []}
    
//--------------------------------------------------------------------------------
    //Busco todos los pokemons y seteo el found en true, asi me renderiza las cards
    case GET_ALL_POKEMONS:
      return { ...state, pokemons: payload, foundPokemons: true};
      
//--------------------------------------------------------------------------------
      
      //Obtengo tipos desde el back
    case GET_TYPES:
      return { ...state, types: payload,  pokemonId: {}  };
      
//--------------------------------------------------------------------------------
      
      //Filtro los pokemons que tengo en el estado global segun los tipos que me indica desde el payload
    case GET_POKEMON_TYPE:
      state.pokemons = state.pokemons.filter((pokemon) => {
        return pokemon.types.some((type) => type === payload);
      });

      
      //si no encuentra ninguno renderizo la imagen de not found, a la vez seteo el estado de los pokemons como antes
      if (state.pokemons.length === 0)
        return { ...state, foundPokemons: false, pokemons: []};
        
      return { ...state, pokemons: state.pokemons };


//--------------------------------------------------------------------------------

      //Obtengo el pokemon por name desde el back en forma de array con un solo objeto, asi puedo renderizar la card en el front
    case GET_POKEMON_NAME:
      return { ...state, pokemons: payload,  foundPokemons: true};


      //Obtengo pokemon por Id desde el back para renderizarlo en la ruta detail
    case GET_POKEMON_ID:
      return { ...state, pokemonId: payload };

    //--------------------------------------------------------
      //cambio el acceso a true para acceder a la home
    case SET_ACCES_TRUE:
      return { ...state, access: true };
      //si intentan navergar a otra ruta sin el acceso en true, los redirige a la landing page
    case SET_ACCES_FALSE:
      return { ...state, access: false };

//--------------------------------------------------------------------------------

      //Filtrado para traer solo los pokemons de la base de datos por la propiedadd isdefault
    case GET_POKEMON_ORIGIN_DB:
      state.pokemons = state.pokemons.filter((pokemon)=> !pokemon.is_default)
      return { ...state, pokemons: state.pokemons };


//--------------------------------------------------------------------------------

      //Ordenamiento de pokemons para manejar renderizados condicionales en cards
      case ORDER_LOW: 
      return {...state, order: {
        orderHiTolow: false,
        orderLowToHi: true,
      }}
      case ORDER_HIGHT: 
      return {...state, order: {
        orderHiTolow: true,
        orderLowToHi: false,
      }}
      case ORDER_ORIGINAL: 
      return {...state, order: {
        orderHiTolow: false,
        orderLowToHi: false,
      }}
//--------------------------------------------------------------------------------
//ordenamiento de pokemons alfabetico
      case ORDER_ALF_A_TO_Z:
        return { ...state, orderAlf: {
          a_z: true,
          z_a: false,
        } }
      case ORDER_ALF_Z_TO_A:
        return { ...state, orderAlf: {
          a_z: false,
          z_a: true,
        } }
      case ORDER_ALF_DEFAULT:
        return { ...state, orderAlf: {
          a_z: false,
          z_a: false,
        } }

        case SET_PAGES: 
        return {...state, pages: payload}
        case SET_INPUT:
        return {...state, input: payload}
//retorno el estado inicial
    default:
      return initialState;
  }
};
export default rootReducer;
