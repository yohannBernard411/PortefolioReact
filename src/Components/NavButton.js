import React from 'react';
import '../Styles/NavButton.css';

const NavButton = (props) => {
let className = '';
if (props.position >= (props.range[0])*window.innerHeight-window.innerHeight/2 && props.position < props.range[1]*window.innerHeight-window.innerHeight/2){
  className = 'btn active';
}else{
  className = 'btn';
}

const handleClick = (event) => {
  window.scrollTo({
    top: (props.range[0]*window.innerHeight*0.9),
    left: 0,
    behavior: 'smooth'
  });
}

return (
  <button onClick={handleClick} className={className}>
    {props.title}
  </button>
)
}

export default NavButton;
