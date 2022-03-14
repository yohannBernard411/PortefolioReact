import React from 'react';
import '../Styles/SeeButton.css';

const SeeButton = () => {
  const handleClick = () => {
    if (document.getElementById('seemore').innerText === "En savoir plus..."){
      document.getElementById('seemore').innerText = "Voir moins";
      document.getElementsByClassName('para1')[0].style.display = "none";
      document.getElementsByClassName('para2')[0].style.display = "none";
      document.getElementsByClassName('para3')[0].style.display = "block";
      document.getElementById('biotexte').style.height = "50vh";
    }else{
      document.getElementById('seemore').innerText = "En savoir plus...";
      document.getElementsByClassName('para1')[0].style.display = "block";
      document.getElementsByClassName('para2')[0].style.display = "block";
      document.getElementsByClassName('para3')[0].style.display = "none";
      if(window.innerWidth>=1000){
        document.getElementById('biotexte').style.height = "30vh";
      }else{
        document.getElementById('biotexte').style.height = "50vh";
      }
    }
  }
  return(
    <div className="seebutton">
      <button id="seemore" className="see-btn" onClick={handleClick}>En savoir plus...</button>
    </div>
  )
}

export default SeeButton;
