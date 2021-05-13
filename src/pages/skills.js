

import React, {Component } from 'react';
import {
    Link
  } from "react-router-dom";
import '../assets/App.css';
import logo from '../Logo.png';
import menuIcon from '../assets/menu-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import twitterIcon from '../assets/twitter-icon.png';
import facebookIcon from '../assets/facebook-icon.png';

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
          <div className="col-9 component text-white wavy francisco"> 
            <div className="animate__animated animate__jello">
              <span style={{color:'#61dafb'}}>S</span>
              <span>k</span>
              <span>i</span>
              <span>l</span>
              <span>l</span>
              <span>s</span>
            </div>
            <div className="skills-paragraph">
              <p>As a front end engineer, apart from working with HTML5, CSS and Bootstrap, I've had experience with frameworks, such as Angular (different versions) and React (Redux and hooks), the latter being the one I feel most comfortable with. </p>
              <p>I've also worked with .NET for the connection to the back end and have some knowledge in Spring Boot as well. As for databases, I've work with SQL and MongoDB for the most part.</p>
              <p>Feel free to ask me for my resume to see the complete list of skills</p>
            </div>
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
        
        </div>
        
    </div>
    )
}

}

export default Skills;