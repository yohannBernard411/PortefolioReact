import React from 'react';
import SocialMedia from './SocialMedia';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p className="signature">Yohann BERNARD, Mars 2022</p>
      <div className="socialfooter">
        <SocialMedia />
      </div>
    </div>
  );
}

export default Footer;
