//Componentes
import Paginado from "../Paginado/Paginado";
import OrderHightToLow from "../CondicionalCards/OrderHightToLow";
import ConsdicionalCards from "../CondicionalCards/ConsdicionalCards";
import OrderLowToHight from "../CondicionalCards/OrderLowToHight";

//layouts
import LoadingPokemons from "../../Layouts/LoadingPokemons/LoadingPokemons";

//Hooks
import { useDispatch, useSelector } from "react-redux";

//Css, img
import style from "./cards.module.css";
import NotFoundPokemons from "../../Layouts/NotFoundPokemons/NotFoundPokemons";

//actions
import {
  order_A_Z,
  order_Z_A,
  orederHigth,
  orederlow,
  orederOriginal,
  resetOrederAlf,
} from "../../redux/actions";

const Cards = () => {
  const dispatch = useDispatch();
  //pokemons api y db
  const pokemons = useSelector((state) => state.pokemons);
  const order = useSelector((state) => state.order);
  console.log(pokemons)
  //pokemons encontrados
  const foundPokemons = useSelector((state) => state.foundPokemons);

  //Paginado
  // const [pagina, setPagina] = useState(1);
  const pagina = useSelector((state) => state.pages);
  const porPagina = 12;
  const maximo = pokemons.length / porPagina;
  return (
    <div className={style.container_cards}>
      <div className={style.container_buttons}>
        <button
          onClick={() => {
            dispatch(resetOrederAlf());
            dispatch(orederHigth());
          }}
          className={style.button}
        >
          Ordenar de menor ataque a mayor ataque
        </button>
        <button
          onClick={() => {
            dispatch(resetOrederAlf());
            dispatch(orederlow());
          }}
          className={style.button}
        >
          Ordenar de mayor a menor ataque
        </button>
      </div>
      <div className={style.container_buttons}>
        <button
          onClick={() => {
            dispatch(orederOriginal());
            dispatch(order_A_Z());
          }}
          className={style.button}
        >
          Ordenar de la A - Z
        </button>
        <button
          onClick={() => {
            dispatch(orederOriginal());
            dispatch(order_Z_A());
          }}
          className={style.button}
        >
          Ordenar de la Z - A
        </button>
      </div>
      <Paginado maximo={maximo} />
      <div className={style.cards}>
        {/* valido que no haya nada en los dos estados independientes de pokemons */}
        {
          // Valido que se hayan encontrado los pokemons filtrados, si no se encuentran van directo al not found
          foundPokemons ? (
            //espero que mi array de pokemons se establezca, mientras carga hay una pantalla de carga
            pokemons.length > 0 ? (
              //Ordenar el array segun el ataque de los pokemons, Orden por defecto
              !order.orderHiTolow && !order.orderLowToHi ? (
                <ConsdicionalCards pagina={pagina} porPagina={porPagina} />
              ) : order.orderHiTolow ? (
                //Ordenar el array segun el ataque de los pokemons, Orden de mayor ataque a menor ataque
                <OrderHightToLow pagina={pagina} porPagina={porPagina} />
              ) : (
                order.orderLowToHi && (
                  <OrderLowToHight pagina={pagina} porPagina={porPagina} />
                )
              )
            ) : (
              //GIF de carga de pokemons
              <LoadingPokemons />
            )
          ) : (
            //imagen de not found de pokemons
            <NotFoundPokemons />
          )
        }
      </div>
    </div>
  );
};

export default Cards;
