import classes from "./switch.module.css";
import Mode from './Mode';
import { useContext } from "react";
import Router from '../routers/Router';

function Switch() {
const a = useContext(Mode);
// const { theme2, themeToggler2 } = useContext(ThemeContext);

const cl = `${classes.header} ${a.theme2 == "light" ? null : classes.dark}`;
const cl2 = `${a.theme2 === "light" ? "change to mode" : "change to mode"}`;


    return (
      <>

            <header className={cl}>
              <button onClick={a.themeToggler2}>{cl2}</button>
              <Router/>
            </header>
          
        
      </>
    );}

export default Switch