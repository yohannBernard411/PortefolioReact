import React from 'react';
import '../Styles/CardProject.css';

const Projet = (props) => {
  const img = 'url("' + props.img + '")';
  return (
    <div className="projectcard" style={{ 
      backgroundImage: img 
    }}>
      <div className="gradient">
        <h3>{props.title}</h3>
        <p>{props.resume}</p>
        <a href={props.lien}>
          <button className="see-btn mrg-btn">{props.btn}</button>
        </a>
      </div>
    </div>
  )
}

export default Projet;
