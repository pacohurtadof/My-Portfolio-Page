

import React, {Component } from 'react';
import {
  Link
} from "react-router-dom";
import '../assets/App.css';
import logo from '../Logo.png';
import CodeImage from '../assets/code-image.png';
import CodeImage2 from '../assets/code-image2.png';
import CodeImage3 from '../assets/code-image3.png';
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
    positionX: 0,
    ibmBoxClass:''
  };
  this.firstTimeScrolling= true;
  this.goingUp=false;
  //this.handleScroll = this.handleScroll.bind(this)
}

componentDidMount = () => {
    document.addEventListener('scroll', this.handleScroll, true);
}   
handleScroll=(event)=>{
    if(event.target.tagName==='BODY'){
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
      if(event.srcElement.scrollTop>1900 ){
        this.firstTimeScrolling= true
        this.goingUp=false
        this.setState({slideRightAnimationContact:'animate__animated animate__backInLeft '})
      }
      if(event.srcElement.scrollTop<1900 ){
        this.setState({slideRightAnimationContact:'animate__animated animate__bounceOutRight'})
      }
      /*if(event.srcElement.scrollTop>=1100){
        var moving= Math.round(event.srcElement.scrollTop-1100)
        //console.log(moving)
        this.setState({positionX: moving, slideAwayAnimation:'row Element pt-0  portfolio slide-away' })
      }*/
  }
}

descriptionHandler= ()=>{
  
  this.setState({ibmBoxClass:'hvr-sweep-to-top'})
  //document.getElementsByClassName("front face")[0].setAttribute("hidden","")
 // document.getElementsByClassName("back face")[0].removeAttribute("hidden")
  //console.log(a)
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
            <a type="button" href="https://www.linkedin.com/in/francisco-hurtado-felipe/" ><img className="socialNetworks-icons" src={linkedinIcon} alt="" /></a>
          </div>
          <div className='col-1 button'>
            <a href="https://www.twitter.com" type="button" ><img className="socialNetworks-icons" src={twitterIcon} alt="" /></a>
          </div>
          <div className='col-1 button'>
            <a href="https://www.facebook.com" type="button" ><img className="socialNetworks-icons" src={facebookIcon} alt="" /></a>
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
            <h5>Front-end Web Developer | Software Developer | Dog Enthusiast</h5>
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
        <div className={" Element section-title pt-0 portfolio pl-5 pr-5 "+this.state.slideRightAnimationPortfolio}>
          <div className="row Element mt-5 pt-5  pl-0"  onScroll={this.handleScroll}>
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
            <div><h5 style={{color:"white"}}>"It ain't much, but it's honest work"</h5></div>
          </div>
          <div className="row"><p style={{color:"white", "fontWeight":"500"}}>A small compilation of my work in the last two years as a front end developer. Time where I've been discovering new passions and learning more about technologies that I like.</p></div>
          <div className="container-cards">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                    <div className="ibm-name">
                    <span className="">IBM</span>
                  </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Starting in 2019, I began my journey as a front end developer by getting an internship at IBM. I'd had previous experience in this area, but now, having to deliver projects as quick as possible, really boosted my front end skills, and specially my react knowledge.
                    Through these two last years, I'd been in different projects within IBM, working along with different companies and teams, fullfilling their software needs and keeping them up and running.
                    </p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                    <div  className="col-12 m-0 text-center"><span className="sherwin-name">Sherwin-</span><span className="williams-name">Williams</span></div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Starting with Sherwin williams, within their project, "ColorSnap", there was a need for a new platform where one could administrate all multimedia which had to be up in the app. Alongside my team, we developed this project using React and Redux for a dynamic interface, where one could see a visual simulation in real time and interact with it.</p>
                          
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                      <div className="row Element  pb-0 portfolio-text name">
                        <div  className="col-12 m-0 "><span className="cemex-name" style={{color: '#E3303D'}}>/</span><span className="cemex-name">/CEMEX</span></div>
                      </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Now at Cemex, I had to leave React for angular for a while. Supporting over 30 different apps used by the CEMEX team every day, we were using technologies like Angular (JS and version 8, mostly) for the front end and .NET for the back end, SQL, Azure and Mongodb for the database, etc.

                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="row mt-0 mr-5 ml-5 mb-0 pb-5 ">
          <span className="scroll-down jump">Scroll Down ▼ </span>
        </div>
        <div className="row m-4 pb-4 pt-4 code-icons">
            <img className="code-image one" src={CodeImage} alt="code image" />
            <img className="code-image two" src={CodeImage2} alt="code image 2" />
            <img className="code-image three" src={CodeImage3} alt="code image 3" />
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