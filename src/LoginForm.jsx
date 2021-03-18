import React,{ Component, createRef } from "react";
import "./App.css";
import Display from "./Display";

class LoginForm extends Component {
   nameEl = createRef(null);
   passwordEl = createRef(null);
   rememberMeEl = createRef(null);
  state = {
  username: " ",
  password: " ",
  rememberMe: " ",
    };
  
    handleSubmit = (e) => {
    e.preventDefault();
     this.setState({
      username: this.nameEl.current.value,
      password: this.passwordEl.current.value,
      rememberMe: this.rememberMeEl.current.checked,
    });
    // it would be a more completely correct REACT approach
    // to make a JSX component to render formData out to a selector on the HTML
    
  };
  render() { 
     
console.log(this.state);

    return (<div>
    <center>
    <form onSubmit={this.handleSubmit}>
      <label>
        {" "}
        Username :
       {" "} <input type="text" placeholder="username" ref={this.nameEl} />{" "}
      </label><br></br><br></br>

      <label>
        {" "}
        Password :{" "}
        <input type="password" placeholder="password" ref={this.passwordEl} />{" "}
      </label><br></br><br></br>

      <label>
        <input type="checkbox" ref={this.rememberMeEl} />
        Remember me
      </label><br></br> <br></br>
      <button type="submit"  className="myButton">
        {" "}
        Login
      </button>
    </form>
    </center>
      <Display brand={this.state}></Display>
    </div> );
  }
}
 
export default LoginForm;
