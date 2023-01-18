import style from "./searchBar.module.css";

import { BiSearchAlt } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";

import { getPokemonByName } from "../../redux/actions/index";

import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inps, setInps] = useState(false);

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search !== "") {
      dispatch(getPokemonByName(search));
      setSearch("");
    }
  };

  return (
    <header className={style.search_bar}>
      {!inps && (
        <BiSearchAlt
          onClick={() => setInps(true)}
          className={`${style.search} ${style.icon}`}
        />
      )}

      {inps && (
        <div className={style.search_open}>
          <CgCloseR
            onClick={() => setInps(false)}
            className={`${style.close} ${style.icon}`}
          />
          <BiSearchAlt
            className={`${style.icon} ${style.find}`}
            onClick={handleSearch}
          />
          <input
            type="text"
            name="name"
            placeholder="Search for Name"
            className={`${style.search_name} ${style.input}`}
            onChange={({ target }) => setSearch(target.value)}
            autoComplete="off"
            value={search}
          />
        </div>
      )}
    </header>
  );
};

export default SearchBar;
