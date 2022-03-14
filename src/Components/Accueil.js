import React from 'react';
import '../Styles/Accueil.css';
import Margetitle from '../Components/Margetitle';

const Accueil = () => {
  return (
    <div className='accueil'>
      <Margetitle title="Accueil"></Margetitle>
      <div className='skills'>
        <h2 className='webdev'><span className='web'>Web</span><span className='dev'> Développeur</span></h2>
        <div className='fields'>
          <p className='offset1'><strong>Design:</strong> FIGMA</p>
          <p className='offset2'><strong>Front-end:</strong> HTML CSS JS</p>
          <p className='offset3'><strong>Framework:</strong> REACT</p>
          <p className='offset4'><strong>Back-end:</strong> NODEJS EXPRESS</p>
          <p className='offset5'><strong>Database:</strong> MYSQL</p>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
