import React,{useEffect} from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';
import Searchbar from "./components/layout/Searchbar";
import Mainnav from "./components/layout/Mainnav";

const App=()=> {

useEffect(()=>{
//Materialize js init
M.AutoInit();
});

  return (
    <div className="App">
     <Mainnav/>

      <div className="appcontent">
      <Searchbar/>


      </div>

     
    </div>
  );
}

export default App;
