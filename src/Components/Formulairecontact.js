import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Styles/Formulairecontact.css';

emailjs.init("top secret");

const Formulairecontact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("top secret", "top secret", form.current, "top secret")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="formulaire" >
      <input type="text" name="user_name" className="object" placeholder='Nom' />
      <input type="email" name="user_email" className="email" placeholder='Email' />
      <textarea name="message" className="content" placeholder='Message' />
      <input type="submit" value="Envoyer" className='cta'/>
    </form>
  );

}

export default Formulairecontact;