import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn.jsx";
import Home from "./pages/Home/Home.jsx";
import CreatePokemon from "./pages/CreatePokemon/CreatePokemon.jsx";
import Detail from "./pages/Detail/Detail.jsx";
import { useDispatch, useSelector } from "react-redux";
import { accesTrue } from "./redux/actions/index.js";
import NavBar from "./Layouts/NavBar/NavBar.jsx";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const access = useSelector((state) => state.access);
  const handleSumit = () => {
    dispatch(accesTrue());
    navigate("/home");
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  <></>
  return (
    <>
      <Routes>
      <Route path="/" element={<LogIn handleSubmit={handleSumit} />}>
        </Route>
        {access && (
          <Route path="/home" element={<NavBar />}>
            <Route index element={<Home />}/>
            <Route path="detail/:id" element={<Detail />} />
            <Route path="create" element={<CreatePokemon />} />
            {/* <Route path="*" element={<Navigate replace to="/"/>}/> */}
          </Route>
        )}

      </Routes>
    </>
  );
}

export default App;
