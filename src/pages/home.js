

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

class Home extends Component{

constructor(props) {
  super(props);
  this.state = {
    slideRightAnimationPortfolio: 'portfolio-hidden',
    slideAwayAnimationPortfolio : '',
    slideRightAnimationContact:'contact-hidden',
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
    console.log(event.srcElement.scrollTop)
    if(event.srcElement.scrollTop>=600 /*&& this.firstTimeScrolling*/ ){
      this.firstTimeScrolling= true
      this.goingUp=true
      this.setState({slideRightAnimationPortfolio:'animate__animated animate__bounceInRight'})
    }
    if(event.srcElement.scrollTop<600  && this.goingUp  ){
      this.firstTimeScrolling= true
      this.goingUp=false
      this.setState({slideRightAnimationPortfolio:'animate__animated animate__bounceOutRight '})
    }
    if(event.srcElement.scrollTop>2000 ){
      console.log("paco")
      this.firstTimeScrolling= true
      this.goingUp=false
      this.setState({slideRightAnimationContact:'animate__animated animate__backInLeft '})
    }
    if(event.srcElement.scrollTop<2000 ){
      this.setState({slideRightAnimationContact:'animate__animated animate__bounceOutRight'})
    }
    /*if(event.srcElement.scrollTop>=1100){
      var moving= Math.round(event.srcElement.scrollTop-1100)
      //console.log(moving)
      this.setState({positionX: moving, slideAwayAnimation:'row Element pt-0  portfolio slide-away' })
    }*/
    
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
          <div  className="col-9 component text-white  wavy francisco animate__animated animate__jello "> 
            <span style={{color:'#61dafb'}}>F</span>
            <span>r</span>
            <span>a</span>
            <span>n</span>
            <span>c</span>
            <span>i</span>
            <span>s</span>
            <span>c</span>
            <span>o</span>
            <span>&nbsp;</span>
            <span style={{color:'#61dafb'}}>H</span>
            <span>u</span>
            <span>r</span>
            <span>t</span>
            <span>a</span>
            <span>d</span>
            <span>o</span>
            <h5>Front-end Web Developer | Software Developer</h5>
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
        <div className="row m-5 mb-0 pb-5 pt-5 ">
          <span className="scroll-down jump">Scroll Down ▼ </span>
        </div>
        </div>
        <div className="layout-portfolio">
        <div className="main container">
        <div className={"row Element section-title pt-0 portfolio pl-5 pr-5 "+this.state.slideRightAnimationPortfolio}>
          <div className="row Element mt-5 pt-5  mb-4 pl-0"  onScroll={this.handleScroll}>
            <div className="col-12 pl-0 component text-white name wavy "> 
              <span></span>
              <span style={{color:'#61dafb'}}>E</span>
              <span>x</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
              <span>i</span>
              <span>e</span>
              <span>n</span>
              <span>c</span>
              <span>e</span>
            </div>
          </div>
          {/*ibm*/}
          <div className={"row Element pt-0 portfolio-description "+this.state.slideRightAnimationPortfolio}>
            <div className="row Element pb-0 mb-0 portfolio-text name">
              <div  className="col-2  ibm-name"><span>IBM</span></div>
            </div>
            <div className="row Element  portfolio-text name ibm">
              <div  className="col-12 "><span>Starting in 2019, I began my journey as a front end developer by getting an intership at IBM. I had previous experience in this area, but having to deliver projects as quick as possible really boosted my front end skills and specially my react knowledge.
              Through these two last years, I've been in different projects within IBM, working along with other companies fullfilling their software needs and keeping them up and running.</span></div>
              
            </div>
            {/*sherwin*/}
            <div className="row Element  pb-0 portfolio-text name">
              <div  className="col-12 m-0 "><span className="sherwin-name">Sherwin-</span><span className="williams-name">Williams</span></div>
            </div>
            <div className="row Element  portfolio-text name sherwin">
              <div  className="col-12 "><span>Starting with Sherwin williams, within their project, "ColorSnap", there was a need for a new platform where one could administrate all multimedia which had to be up in the app. Alongside my team, we developed this project using React and Redux for a dynamic interface, where one could see a visual simulation in real time and interact with it.   </span></div>
              <div className="col-8">
              </div>
            </div>
            {/*cemex*/}
            <div className="row Element  pb-0 portfolio-text name">
              <div  className="col-12 m-0 "><span className="cemex-name" style={{color: '#E3303D'}}>/</span><span className="cemex-name">/CEMEX</span></div>
            </div>
            <div className="row Element portfolio-text name cemex">
              <div  className="col-12 "><span>In Cemex I had to leave React for angular for a while. Supporting over 30 different apps used by the CEMEX team every day, we were using technologies like Angular (JS and version 8, mostly) for the front end and .NET for the back end, SQL, Azure and Mongodb for the database, etc.</span></div>
              <div className="col-8">
              </div>
            </div>
          </div>
          <div className="row m-4 pb-2 pt-2">
            <span> </span>
          </div>
          <div className="row m-4 pb-4 pt-4 code-icons">
            <img className="code-image one" src={CodeImage} alt="code image" />
            <img className="code-image two" src={CodeImage2} alt="code image 2" />
            <img className="code-image three" src={CodeImage3} alt="code image 3" />
          </div>
        </div>
        <div className="row m-5 mb-0 pb-5 ">
          <span className="scroll-down jump">Scroll Down ▼ </span>
        </div>
        <div className={"contact "+this.state.slideRightAnimationContact}>
          <Contact inHome={true}></Contact>
        </div>
        
        </div>
        
        
        
        
      </div>
    </div>
    )
}

}

export default Home;