import React from 'react';
import '../Styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import NavButton from '../Components/NavButton';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
      position: 0,
      screen: "smart"
    };
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  handleScroll = () => {
    this.setState({position: window.scrollY});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    (window.innerWidth<1000) ? this.setState({screen: "smart"}) : this.setState({screen: "pc"});
  }
  
  render(){
    return (
      <div className='header' style={{height: window.innerWidth<1000 && this.state.open ? "37vh" : "10vh" }}>
        <div className='titlespace'>
          <h2 className='title'><span className='firstname'>Yohann</span><span className='lastname'> BERNARD</span></h2>
        </div>
        <div className='menu'>
          <button className='btn' id='menu-icon'><FontAwesomeIcon icon={ this.state.open ? faXmark : faBars } onClick={this.handleClick} /></button>
          {/* <ul className='menu-list' style={{display: window.innerWidth>1000 || this.state.open ? "flex" : "none" }}> */}
          <ul className='menu-list'>
            <li>
              <NavButton title="Accueil" position={this.state.position} range={this.state.screen==="pc" ? [0, 1] : [0, 1] } rank={1}></NavButton>
            </li>
            <li>
              <NavButton title="A propos" position={this.state.position} range={this.state.screen==="pc" ? [1, 2] : [1, 3] } rank={2}></NavButton>
            </li>
            <li>
              <NavButton title="Réalisations" position={this.state.position} range={this.state.screen==="pc" ? [2, 3] : [3, 6] } rank={3}></NavButton>
            </li>
            <li>
              <NavButton title="Contact" position={this.state.position} range={this.state.screen==="pc" ? [3, 4] : [6, 8] } rank={4}></NavButton>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
