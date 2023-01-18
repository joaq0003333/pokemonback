//actions
import { accesFalse } from "../../redux/actions";

//CSS
import style from "./navBar.module.css";
//react-icons
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai"
//Hooks
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(accesFalse());
    navigate("/");
  };
  
  const [bar, setbar] = useState(false);

  return (
    <nav >
      <section>

      </section>
    <section className={style.nav_bar}>
        {/* Open slider bar */}
        {!bar && <GiHamburgerMenu onClick={() => setbar(true)} className={style.open}/>}

{/* slider Bar */}
{bar && (
  <div className={style.slide_bar}>
    <AiOutlineClose onClick={() => setbar(false)} className={style.close}/>
    <button className={style.create_pokemon}><Link to="/home/create" className={style.link}>Crear Pokemon</Link></button>
    <button className={style.home}><Link to="/home" className={style.link}>Home</Link></button>

    <button onClick={() => logOut()} className={style.button_exit}>Exit</button>
  </div>
)}
    </section>
      <section>
      <Outlet>
        
        </Outlet>
      </section>
    </nav>
  );
};

export default NavBar;
