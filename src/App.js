import "./App.css";
import Router from "./routers/Router";
import { useState } from "react";
import Mode from "./mode/Mode";
import Switch from "./mode/Switch";




function App() {



const [themeState, setThemeState] = useState( localStorage.getItem('theme') || "light");
function toggleTheme() {
  setThemeState((prev) => {
    localStorage.setItem("theme", prev === "light" ? "dark" : "light")
    return prev === "light" ? "dark" : "light"
  });
  
    // const chosenMode = !themeState;
    // setThemeState(chosenMode);
    // localStorage.setItem("dark", chosenMode);
  };



  return (
    <>
      <Mode.Provider value={{ theme2: themeState, themeToggler2: toggleTheme }}>
        <Switch />
      

      {/* <div className="App">
        <Router />
      </div> */}
    </Mode.Provider>
    </>
  );
}

export default App;
