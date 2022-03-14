import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Edging from "./Components/Edging";
import Accueil from "./Components/Accueil";
import Apropos from "./Components/Apropos";
import Realisations from "./Components/Realisations";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {

  return (
    <div className="App">
      <Header>Header</Header>
      <Edging></Edging>
      <Accueil id="accueil">Accueil</Accueil>
      <Apropos>A propos</Apropos>
      <Realisations>Realisations</Realisations>
      <Contact>Contact</Contact>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
