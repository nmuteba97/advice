import React from 'react';
import './Advice.css'
import axios from 'axios';




class Advice extends React.Component{
    state= {
        advice: ''
    }
   
   componentDidMount(){
       this.fetchAdvice()
   }

   fetchAdvice=()=>{
       axios.get('https://api.adviceslip.com/advice')

       .then((response)=>{
           const {advice} = response.data.slip;
            console.log({response});

            this.setState({advice})
            
       })
   }

    render(){
    
        const {advice}= this.state;
    
        return(
            <div className = "advice">
            <h1 className="header">{advice}</h1>
            <button className = "button"
            type = "submit"
            onClick={this.fetchAdvice}>
            <span>Generate Advice</span>
            </button>
            </div>
            
        )
    }
}


export default Advice;