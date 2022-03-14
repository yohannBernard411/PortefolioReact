import React from 'react';
import '../Styles/Contact.css';
import Margetitle from './Margetitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faMobile, faUserTie} from '@fortawesome/free-solid-svg-icons';
import Formulairecontact from '../Components/Formulairecontact';

const Contact = () => {
  return (
    <div className='contact'>
      <Margetitle title="Contact"></Margetitle>
      <div className='screencontact'>
        <div className="coordonnees">
          <p><FontAwesomeIcon icon={faUserTie} /> Yohann BERNARD</p>
          <p><FontAwesomeIcon icon={faAt} />  yohannb215@gmail.com</p>
          <p><FontAwesomeIcon icon={faMobile} /><a href="tel:0621891221" className='phonenum'>  06.21.89.12.21</a></p>
        </div>
        <Formulairecontact />
      </div>
    </div>
  );
}

export default Contact;
