import React from 'react';
import '../Styles/Bio.css';

const Bio = () => {


return (
    <div id="biotexte">
      <div className="para1">
        <p>Yohann BERNARD</p>
        <p>39 ans</p>
        <p>WEB Développeur full-stack</p>
      </div>
      <div className="para2">
        <p>Aprés 15 ans dans le domaine de l'aéronautique, et une reconversion (pour raison de santé).</p>
        <p>Je suis développeur web full-stack avec une attirance particuliére pour l'algorithmie.</p>
      </div>
      <div className="para3">
        <p>Après 15 ans dans le domaine de l'Aéronautique, domaine passionnant mais dans lequel je ne peux malheureusement plus travailler pour raison de santé (RQTH : cheville gauche). Je me ré-oriente vers le développement Web, métier qui m'attire beaucoup car c'est un secteur motivant ou il faut continuellement apprendre et évoluer, et comme l'Aéronautique, c'est un secteur qui demande de la rigueur et de l'organisation, de plus je codais déjà pour mes loisirs perso avant (<a href="https://mariowebapp.herokuapp.com/">"jeux en 2D"</a>, Arduino, Raspberry-pi...).</p>
        <p>Pour accomplir cette reconversion, j'ai commencé par le FREE CODE CAMP pour découvrir les bases (HTML, CSS, JavaScript), puis j'ai effectué la formation <a href="https://zupimages.net/up/20/34/mw80.jpg">"Développeur web fullstack"</a> du WAGON Bordeaux durant 9 semaines intensives, formation financée par TRANSITION PRO, où j'ai appris:</p>
        <ul>
          <li>Ruby: Flow, Regexp, Parsing, Storing</li>
          <li>Programmation orienté objets: Classes, Instances, Héritages</li>
          <li>Base de données SQL: CRUD, Active Record, Associations,  Validations</li>
          <li>Front: HTML, CSS, Bootstrap, Grid & Flex, JavaScript, Ajax, plugins</li>
          <li>Rails: M-V-C, Routing</li>
          <li>Gemmes & services: Cloudinary, Devise, Omniauth, Pundit, Geocoding</li>
          <li>Réalisation d'un projet en équipe (3 pers/2semaines)</li>
        </ul>
        <p>J'ai personnellement complété cette formation avec quelques cours UDEMY, tel que:</p>
        <ul>
          <li>Vraiment bien comprendre JavaScript</li>
          <li>Gestion de projet Agile, la méthode SCRUM</li>
          <li>Testing Ruby with RSpec: The complete guide</li>
        </ul>
        <p>Car il s'agit de compétences qu'il me semblait indispensable d'approfondir.</p>
        <p>Afin de mettre ces nouvelles compétences en pratique, j'ai réalisé un site pour une cliente (<a href="http://www.ocenatcreations.com">"OceNatCréations.com"</a>). Site très intéressant puisqu'il concerne des valeurs auxquelles je suis attaché (artisanat, respect de l'environnement). La réalisation de ce site m'a permit d'avoir une vision plus précise de ce qu'un client attend d'un développeur WEB, il m'a permit de me confronter aux différentes difficultés techniques (authentification clients, envoie d’e-mails, traductions, gestion des commandes...).</p>
        <p>Pour pouvoir continuer à apprendre tout en réalisant des projets de plus grande envergure au sein d’une équipe qui partagerait les mêmes valeurs que moi (l’entraide, le respect, l’envie de réaliser des choses ayant un réel impact), je recherche maintenant une entreprise.</p>
      </div>
    </div>
  )
}

export default Bio;
