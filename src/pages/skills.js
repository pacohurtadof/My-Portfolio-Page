

import React, {Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import '../assets/App.css';
import logo from '../Logo.png';
import CodeImage from '../assets/code-image.png';
import CodeImage2 from '../assets/code-image2.png';
import CodeImage3 from '../assets/code-image3.png';
import IBMBackground from '../ibmbackground.jpg';
import menuIcon from '../assets/menu-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import twitterIcon from '../assets/twitter-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import Contact from './contact';

class Skills extends Component{

constructor(props) {
  super(props);
  this.state = {
    slideRightAnimation: 'row Element pt-0 portfolio ',
    slideAwayAnimation : 'row Element pt-0 portfolio ',
    positionX: 0
  };
  this.firstTimeScrolling= true;
  this.goingUp=false;
  //this.handleScroll = this.handleScroll.bind(this)
}

componentDidMount = () => {
    document.addEventListener('scroll', this.handleScroll, true);
}   
handleScroll=(event)=>{
    //console.log(event.srcElement.scrollTop)
    if(event.srcElement.scrollTop>=700 /*&& this.firstTimeScrolling*/ ){
      this.firstTimeScrolling= true
      this.goingUp=true
      this.setState({slideRightAnimation:'row Element pt-0 portfolio slide-right '})
    }
    if(event.srcElement.scrollTop<700 && this.goingUp  ){
      this.firstTimeScrolling= true
      this.goingUp=false
      this.setState({slideRightAnimation:'row Element pt-0 portfolio slide-left '})
    }
    
}
render(){
    
    return(
    <div className="Layout"  >
      <div className="App ">
        <div className="row App-header justify-content-center">
          <div className="col-9">
            <img className="App-logo " src={logo} alt="React Logo" />
          </div>
          <div className='col-1 button' >
            <a type="button" href="https://www.linkedin.com/in/francisco-hurtado-felipe/" ><img className="socialNetworks-icons" src={linkedinIcon} alt="linkedin Logo" /></a>
          </div>
          <div className='col-1 button'>
            <a type="button" ><img className="socialNetworks-icons" src={twitterIcon} alt="twitter Logo" /></a>
          </div>
          <div className='col-1 button'>
            <a type="button" ><img className="socialNetworks-icons" src={facebookIcon} alt="facebook Logo" /></a>
          </div>
        </div>
        
      </div>
      <div className="MainPage container ">
        <div className="row m-5 pb-4 pt-4">
          <span> </span>
        </div>
        <div className="row m-5 pb-4 pt-4">
          <span> </span>
        </div>
        <div className="row Element p-0">
          <div  className="col-9 component text-white  wavy francisco "> 
            <span style={{color:'#61dafb'}}>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h5>
          </div>
          <div className="col-3 menu text-right menu-list ">
            {/*<img className="App-logo" src={logo} alt="React Logo" />*/}
              <img className="menu-icon" src={menuIcon} alt="React Logo" />
              <div className="row">
                <Link className="col-12 m-2" to="/">Home</Link>
              </div>
              <div className="row">
                <Link className="col-12 m-2" to="/skills">Skills</Link>
              </div>
              <div className="row">
                <Link className="col-12 m-2" to="/contact">Contact</Link>
              </div>
              
          </div>
        </div>
        <div className=" text-center mt-5">
          <div className="row justify-content-md-center  skills-container">
            <span className="list-of-skills col-1 left" style={{["--i"]: 2}} >JavaScript </span>
            <span className="list-of-skills col-1 middle " style={{["--i"]: -1}}>Angular </span>
            <span className="list-of-skills col-1 right" style={{["--i"]: -2}}>SQL </span>
          </div>
          <div className="row justify-content-md-center  skills-container">
            <span className="list-of-skills col-2 left" style={{["--i"]: 1}} >Firebase </span>
            <span className="list-of-skills col-2 right" style={{["--i"]: -1}}>Angular </span>
          </div>
          <div className="row justify-content-md-center">
            <span className="list-of-skills col-2 middle  align-self-center" style={{["--i"]: -1}}>React </span>
          </div>
          <div className="row justify-content-md-center  skills-container">
            <span className="list-of-skills col-2 left" style={{["--i"]: 1}}>Typescript </span>
            <span className="list-of-skills col-2 right" style={{["--i"]: -1}}>Azure </span>
          </div>
        </div>
          <section class="stage">
          <figure class="ball"><span class="shadow"></span>
            <div className=" text-center mt-5 pt-5">
                    <div className="row justify-content-md-center  skills-container">
                      <span className="list-of-skills col-2 left" style={{["--i"]: 1}} >JavaScript </span>
                      <span className="list-of-skills col-2 right" style={{["--i"]: -1}}>Angular </span>
                    </div>
                    <div className="row justify-content-md-center">
                      <span className="list-of-skills col-2 middle align-self-center" style={{["--i"]: -1}}>React </span>
                    </div>
                    <div className="row justify-content-md-center  skills-container">
                      <span className="list-of-skills col-2 left" style={{["--i"]: 1}}>CSS </span>
                      <span className="list-of-skills col-2 right" style={{["--i"]: -1}}>Angular </span>
                    </div>
                  </div>
          </figure>
        </section>
        </div>
        
    </div>
    )
}

}

export default Skills;