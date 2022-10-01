import React from "react";
import "./App.css"
import {Romantic,trending,Documentaries,Original,HorrorMovies}  from './urls'
import Banner from "./Componets/Banner/Banner";
import Navbar from "./Componets/NavBar/Navbar";
import RowPost from "./Componets/RowPost/RowPost";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <RowPost url={Original} title='Netflix Originals'/>
        <RowPost url={trending} title=' Trending' isSmall/>
        <RowPost url={Romantic} title='Romance Movies' isSmall/>
        <RowPost url={Documentaries} title='Documentaries' isSmall/>
        <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>
    </div>
  );
}

export default App;
