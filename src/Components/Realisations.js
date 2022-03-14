import React from 'react';
import '../Styles/Realisations.css';
import Margetitle from './Margetitle';
import CardProject from './CardProject';

const Realisations = () => {
  return (
    <div className='realisations'>
      <Margetitle title="Réalisations"></Margetitle>
      <div className='screentwo'>
      <CardProject title="OceNatCreations" img="https://zupimages.net/up/20/34/o57c.png" resume="Premier client en tant que Freelance, c'est concrétiser les souhaits du client, apporter une dimension international à cette petite entreprise naissante. Régler les différentes contraintes techniques qui se présentés. Et même apporter ma contribution au souhait d’écologie du client pour son entreprise, en lui proposant de regrouper les impressions étiquettes de colis afin de diminuer le nombre de feuilles utilisées." btn="OceNatCreations" lien="https://ocenatcreations.herokuapp.com/" />
      <CardProject title="Space X" img="https://zupimages.net/up/22/07/97ny.png" resume="Premier site créé en React suite à la foration React Entreprise. Facilité par l'usage de composants appartenants à la bibliothéque Material UI. Ce projet m'a également permis de comprendre le fonctionnement et les avantages des API." btn="Space X" lien="https://boring-williams-18dd07.netlify.app/" />
      <CardProject title="Pokemon" img="https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg" resume="Pour augmenter la complexité et comprendre de nouveaux comcepts tel que le scrapping, et m'amuser avec mon fils, j'ai réalisé ce jeu de carte pokemon." btn="Pokemon" lien="https://boring-williams-18dd07.netlify.app/" />

      </div>
    </div>
  );
}

export default Realisations;
