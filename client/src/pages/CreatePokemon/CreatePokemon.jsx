//hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Card from "../../components/Card/Card";

//helper
import validatePokemon from "../../components/helpers/postPokemonValidate";

//actions
import { createPokemon, getAllPokemons } from "../../redux/actions";

//css
import style from "./createPokemon.module.css";

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [pokemon, setPokemon] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    image: "",
    types: [],
  });

  const [error, setError] = useState({});

  useEffect(() => {
    setError(validatePokemon(pokemon));
  }, [pokemon]);

  const handleOnChangeInps = ({ target }) => {
    const valueInp = target.value;
    const nameInp = target.name;

    nameInp === "name" || nameInp === "image"
      ? setPokemon({
          ...pokemon,
          [nameInp]: valueInp,
        })
      : setPokemon({
          ...pokemon,
          [nameInp]: parseInt(valueInp),
        });
  };

  const handleOnChangeCheckbox = ({ target }) => {
    if (target.checked) {
      setPokemon({
        ...pokemon,
        types: [...pokemon.types, target.id],
      });
    } else if (!target.checked) {
      //Busco por id el nombre que quiero quitar
      const findIndexName = pokemon.types.indexOf(target.id);
      //actualizo el array sacando el indice que encontre
      pokemon.types.splice(findIndexName, 1);

      //seteo el estado local
      setPokemon({
        ...pokemon,
        types: pokemon.types,
      });
    }
  };

  const hanldeOnSubmit = (e) => {
    e.preventDefault();
    if (!Object.entries(error).length) {
      dispatch(createPokemon(pokemon));
      setPokemon({
        name: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        image: "",
        types: [],
      });
      dispatch(getAllPokemons());
    }
    e.target.reset();
  };
  return (
    <div className={style.container_create}>
      <div className={style.container_card}>
        <Card
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
          attack={pokemon.attack}
        />
      </div>
      <form onSubmit={hanldeOnSubmit}>
        <div className={style.inps}>
          <div className={style.conainer_inps}>
            <div className={style.inps_content}>
              <input
                placeholder="Introducir Nombre"
                autoComplete="off"
                type="text"
                name="name"
                onChange={handleOnChangeInps}
                value={pokemon.name}
                className={error.name ? style.error_inp : style.inp}
              />
              {
                error.name &&
                <span className={style.error_span}>{error.name}</span>
              }
            </div>
            <div className={style.inps_content}>
              <input
                placeholder="insert URL image"
                autoComplete="off"
                type="text"
                name="image"
                onChange={handleOnChangeInps}
                value={pokemon.image}
                className={style.inp}
              />
              
            </div>
            <div className={style.inps_content}>
              <label htmlFor="">Vida</label>
              <input
                placeholder="Vida... ej: 49"
                autoComplete="off"
                type="number"
                name="hp"
                onChange={handleOnChangeInps}
                value={pokemon.hp}
                className={error.hp ? style.error_inp : style.inp}
              />
                          {
                error.hp &&
                <span className={style.error_span}>{error.hp}</span>
              }
            </div>
            <div className={style.inps_content}>
              <label htmlFor="">Ataque</label>

              <input
                placeholder="Ataque... ej: 25"
                autoComplete="off"
                type="number"
                name="attack"
                onChange={handleOnChangeInps}
                value={pokemon.attack}
                className={error.attack ? style.error_inp : style.inp}
              />
                                        {
                error.attack &&
                <span className={style.error_span}>{error.attack}</span>
              }
            </div>
          </div>
          <div className={style.conainer_inps}>
            <div className={style.inps_content}>
              <label htmlFor="">Defensa</label>

              <input
                placeholder="Defensa... ej: 200"
                autoComplete="off"
                type="number"
                name="defense"
                onChange={handleOnChangeInps}
                value={pokemon.defense}
                className={error.defense ? style.error_inp : style.inp}
              />
                                        {
                error.defense &&
                <span className={style.error_span}>{error.defense}</span>
              }
            <div className={style.inps_content}>
              <label htmlFor="">Altura</label>

              <input
                placeholder="Altura... ej: 1.23 "
                autoComplete="off"
                type="number"
                name="height"
                onChange={handleOnChangeInps}
                value={pokemon.height}
                className={error.height ? style.error_inp : style.inp}
              />
                                        {
                error.height &&
                <span className={style.error_span}>{error.height}</span>
              }
            </div>
            </div>
            <div className={style.inps_content}>
              <label htmlFor="">Speed</label>

              <input
                placeholder="Speed... ej: 80"
                autoComplete="off"
                type="number"
                name="speed"
                onChange={handleOnChangeInps}
                value={pokemon.speed}
                className={error.speed ? style.error_inp : style.inp}
              />
                                        {
                error.speed &&
                <span className={style.error_span}>{error.speed}</span>
              }
            </div>
            <div className={style.inps_content}>
              <label htmlFor="">Peso</label>

              <input
                placeholder="Peso... ej: "
                autoComplete="off"
                type="number"
                name="weight"
                onChange={handleOnChangeInps}
                value={pokemon.weight}
                className={error.weight ? style.error_inp : style.inp}
              />
                                        {
                error.weight &&
                <span className={style.error_span}>{error.weight}</span>
              }
            </div>
          </div>
        </div>
        <div className={style.types}>
          {types?.map((t) => (
            <section key={t.id} className={style.container_type}>
              <label htmlFor={t.id} className={style.label}>
                {t.name}
              </label>
              <input
                className={style.check}
                type="checkbox"
                id={t.id}
                onChange={handleOnChangeCheckbox}
                name={t.name}
              />
            </section>
          ))}
        </div>
        <div>
          {
            error.types && <span className={style.error_span}>{error.types}</span>
          }
        </div>
        <input
          type="submit"
          value="Crear Pokemon"
          className={style.submit}
          disabled={Object.entries(error).length}
        />
      </form>
    </div>
  );
};

export default CreatePokemon;
