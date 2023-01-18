import style from "./home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import Cards from "../../components/Cards/Cards";


const Home = () => {

  return (
    <div className={style.body}>
      <SearchBar />
      <main className={style.main}>
        <Filters />
        <Cards />
      </main>
    </div>
  );
};

export default Home;
