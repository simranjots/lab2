import React,{ Component } from "react";
import "./App.css";

class Display extends Component {
       
    state = { 
         user : this.props.username
         };
    
    handeleEvent = () => {
        this.setState({user: this.state.user});
    }
    render() { 
        console.log("prop",this.props)
        return (<h1>Hello,{this.props.brand.username}</h1>  );
    }
}
 
export default Display;
