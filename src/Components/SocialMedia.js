import React from 'react';
import '../Styles/SocialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faCodepen, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
  return(
    <ul className="socialmedia">
      <li><a href='https://www.facebook.com/profile.php?id=100008553408660'>
        <FontAwesomeIcon className="iconlink" icon={faFacebook} />
        </a>
      </li>
      <li><a href='https://codepen.io/Yohber2'>
      <FontAwesomeIcon className="iconlink" icon={faCodepen} />
        </a>
      </li>
      <li><a href='https://github.com/yohannBernard411'>
      <FontAwesomeIcon className="iconlink" icon={faGithub} />
        </a>
      </li>
      <li><a href='https://twitter.com/Yohann83654858'>
      <FontAwesomeIcon className="iconlink" icon={faTwitter} />
        </a>
      </li>
      <li><a href='https://www.linkedin.com/in/yohber/'>
      <FontAwesomeIcon className="iconlink" icon={faLinkedin} />
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia;
