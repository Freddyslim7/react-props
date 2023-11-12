// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./component/playerslist";
import NavScrollExample from "./component/navbar";
import BasicExample from "./component/form";
import BrandExample from "./component/footer";

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <div className="text-center pt-2">
        <h2>Play.ng</h2>
        <h4>Home of football</h4>
        <hr></hr>
      </div>
      <h5 className="text-center pt-2">
        Players Of the Week
      </h5>
      <PlayersList />
      <BasicExample />
      <BrandExample />
    </div>
  );
}

export default App;
