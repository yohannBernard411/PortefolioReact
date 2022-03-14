import React from 'react';
import '../Styles/Apropos.css';
import Margetitle from './Margetitle';
import Selfie from './Selfie';
import SocialMedia from './SocialMedia';
import Bio from './Bio';
import SeeButton from './SeeButton';


const Apropos = () => {
  return (
    <div className='apropos'>
      <Margetitle title="A propos"></Margetitle>
      <div className='screen'>
        <div className='left'>
          <Selfie></Selfie>
          <SocialMedia></SocialMedia>
        </div>
        <div className='right'>
          <Bio></Bio>
          <SeeButton></SeeButton>
        </div>
      </div>
    </div>
  );
}

export default Apropos;
