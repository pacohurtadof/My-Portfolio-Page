
import React, {Component } from 'react';
import JaliscoMap from '../assets/jalisco.png'
import {
    Link
  } from "react-router-dom";
import { send } from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";


class Contact extends Component{

    constructor(props) {
        super(props);
        this.state = {
          slideRightAnimation: 'row Element pt-0 contact-component',
          slideAwayAnimation : 'row Element pt-0 contact-component',
          positionX: 0,
          validity: false,
          name:'',
          email:'',
          message:'',
          recaptcha: false,
          inHome: props.inHome
        };
        this.firstTimeScrolling= true
        this.myRef = React.createRef();
        //this.handleScroll = this.handleScroll.bind(this)
      }

    async onSubmit(e){
        e.preventDefault()
        const token = await this.myRef.current.getValue()
        if(token){
            send(
                'service_f6z3r2c',
                'template_cv2z27o',
                {"name":this.state.name, "email":this.state.email, "message": this.state.message},
                'user_RCdknPgizvrWtG3KdwU13'
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message sent")
            })
            .catch((err) => {
                console.log('FAILED...', err);
                alert("Sorry, there was a mistake")
            });
        }
        this.myRef.current.reset()
    }

    

    checkvalidity= ()=>{
        if(this.state.name!=='' && this.state.email!=='' && this.state.message!=='' && this.state.recaptcha){
            this.setState({validity:true})
        }
        else{
            this.setState({validity:false})
        }
    }

    formHandler= (e)=>{
        if(e.target.className === 'form-control name'){
            this.setState({...this.state,name: e.target.value},()=> this.checkvalidity())
        }
        if(e.target.className === 'form-control email'){
            this.setState({...this.state,email: e.target.value}, ()=>this.checkvalidity())
        }
        if(e.target.className === 'form-control message'){
            this.setState({...this.state,message: e.target.value},()=>this.checkvalidity())
        }
        
    }

    onloadCallback=()=>{
        this.setState({recaptcha:!this.state.recaptcha}, )
        this.checkvalidity()
    }
      
      
    render(){
        return(
            <div className={this.state.inHome? '':'contact-page'}>
                <div className='container'>
                    <div className = "contact-component row"  >
                        <div className="col-8 pt-5 pl-0">
                            <div hidden={this.state.inHome} className="mr-5 go-back-button" ><button className="btn-primary"><Link className="text-white" to="/">Home</Link></button></div>
                            <div className="row Element  pb-0  pl-0 "  onScroll={this.handleScroll}>
                                <div className="col-12 component text-white name wavy animate__animated animate__jello "> 
                                <span></span>
                                <span style={{color:'#61dafb'}}>C</span>
                                <span>o</span>
                                <span>n</span>
                                <span>t</span>
                                <span>a</span>
                                <span>c</span>
                                <span>t</span>
                                <span>&nbsp;</span>
                                <span>m</span>
                                <span>e</span>
                                </div>
                            </div>
                            <h5 className="mb-5 ml-2" style={{color:"white"}}>Let's talk business</h5>
                            <div className="contact-form ml-0 pt-5 mt-4" >
                                <div className="col-12 text-white"><h6>Send me a message and I'll get in touch with you through the provided email.</h6></div>
                                <form onSubmit={(e)=>this.onSubmit(e)} className="needs-validation">
                                    <div className="row Element   pb-0 contact-text name">
                                        <div className="col-2">
                                            <span>Name</span>
                                        </div>
                                        <div  className="col-10 contact-form-font">
                                            <input onChange={(e)=>this.formHandler(e)} className= "form-control name" placeholder="John Doe" required></input>
                                        </div>
                                    </div>
                                    <div className="row Element pb-0 contact-text name">
                                        <div className="col-2">
                                            <span>Email</span>
                                        </div>
                                        <div  className="col-10 contact-form-font">
                                            <input onChange={(e)=>this.formHandler(e)} className= "form-control email" placeholder="JohnDoe@email.com" required></input>
                                        </div>
                                    </div>
                                    <div className="row Element pb-0 contact-text name">
                                        <div className="col-2">
                                            <span>Message</span>
                                        </div>
                                        <div  className="col-10 contact-form-font">
                                            <textarea onChange={(e)=>this.formHandler(e)} className="form-control message" rows="3" placeholder="Your message" required></textarea>
                                        </div>
                                    </div>
                                    <div className="row Element ml-5 pl-5 pb-0 contact-text name justify-content-end">
                                        <div className="m-4 ml-4 justify-content-end" required>
                                        <ReCAPTCHA
                                            sitekey="6Lc5dtIaAAAAAGNWGu5pVEK_vJyD0IUOeQG-C71m"
                                            onChange={this.onloadCallback}
                                            onExpired={this.onloadCallback}
                                            ref={this.myRef}
                                        />
                                        </div>
                                        <div  className="col-2  contact-form-font pt-4 ">
                                            <button disabled={!this.state.validity} type="submit" className= "btn btn-primary" placeholder="Your message">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="map-container-google col-4">
                            <p className="location-text">
                                <span className="t">I'm currently located in Guadalajara, <br/> JAL, MEX</span>
                            </p>
                            <div className="jalisco-map">
                                <img className="" src={JaliscoMap} alt="MAP" />
                            </div>
                        </div>
                        
                        
                </div>
            </div>
        </div>
        
        )
    }
}

export default Contact;