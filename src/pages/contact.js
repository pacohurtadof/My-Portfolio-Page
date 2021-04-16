
import React, {Component } from 'react';
import JaliscoMap from '../assets/jalisco.png'



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
          inHome: props.inHome
        };
        this.firstTimeScrolling= true
        //this.handleScroll = this.handleScroll.bind(this)
      }

    onSubmit= ()=>{
        
        if(this.state.validity){
            alert("hola")
        }
    }

    checkvalidity= ()=>{
        console.log(this.state)
        if(this.state.name!='' && this.state.email!='' && this.state.message!=''){
            this.setState({validity:true})
        }
        else{
            this.setState({validity:false})
        }
    }

    formHandler= (e)=>{
        console.log(e.target.value)
        if(e.target.className === 'form-control name'){
            console.log("name")
            this.setState({...this.state,name: e.target.value},()=> this.checkvalidity())
        }
        if(e.target.className === 'form-control email'){
            this.setState({...this.state,email: e.target.value}, ()=>this.checkvalidity())
        }
        if(e.target.className === 'form-control message'){
            this.setState({...this.state,message: e.target.value},()=>this.checkvalidity())
        }
        
    }
      
      
    render(){
        return(
            <div className={this.state.inHome? '':'contact-page'}>
                <div className='container'>
                    <div className = "contact-component row"  >
                        <div className="col-8 pt-5 pl-0">
                        <div className="row Element  pb-0  pl-0 "  onScroll={this.handleScroll}>
                            <div  className="col-12 component   text-white name wavy "> 
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
                        <div className="row m-4 pb-3 pt-4">
                            <span> </span>
                        </div>
                        <div className="contact-form ml-0 pt-5" >
                            <form onSubmit={this.onSubmit} className="needs-validation">
                                <div className="row Element   pb-0 contact-text name">
                                    <div className="col-2">
                                        <span>Name</span>
                                    </div>
                                    <div  className="col-10 contact-form-font">
                                        <input onChange={(e)=>this.formHandler(e)} className= "form-control name" placeholder="John Doe"></input>
                                    </div>
                                </div>
                                <div className="row Element pb-0 contact-text name">
                                    <div className="col-2">
                                        <span>Email</span>
                                    </div>
                                    <div  className="col-10 contact-form-font">
                                        <input onChange={(e)=>this.formHandler(e)} className= "form-control email" placeholder="JohnDoe@email.com"></input>
                                    </div>
                                </div>
                                <div className="row Element pb-0 contact-text name">
                                    <div className="col-2">
                                        <span>Message</span>
                                    </div>
                                    <div  className="col-10 contact-form-font">
                                        <textarea onChange={(e)=>this.formHandler(e)} class="form-control message" rows="3" placeholder="Your message" required></textarea>
                                    </div>
                                </div>
                                <div className="row Element ml-5 pl-5 pb-0 contact-text name justify-content-end">
                                    
                                    <div  className="col-2  contact-form-font ">
                                        <button disabled={!this.state.validity} type="submit" className= "btn btn-primary" placeholder="Your message">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                        <div className="map-container-google" className="col-4">
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