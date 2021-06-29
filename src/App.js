import React,{useEffect} from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';
import Mainnav from "./components/layout/Mainnav";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./Home";
import About from "./About";
import { Router} from "@reach/router"


const App=()=> {

useEffect(()=>{
//Materialize js init
M.AutoInit();
});

  return (
    <Provider store={store}>  
    <div className="App">
     <Mainnav/>

    <Router>
    <Home path="/*"/>
    <About path="/about"/>
    </Router>            
    </div>
    </Provider>
  );
}

export default App;
