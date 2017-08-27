import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import {browserHistory} from 'react-router-dom';

import { Redirect } from 'react-router';
import '../App.css';


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
class Login extends Component {




    constructor(props) {
        super(props);
        this.state = {
           name: "Max",
            password: "Max",
            isLoggedIn: true,
        };

      //  this.handleInputChange = this.handleInputChange.bind(this);
    }



    login = () => {
       console.log(this.state.name);
       console.log(this.state.password);
        if(this.state.name==="Max" ){
            console.log("true");

            this.setState({redirect: true});
        }
        else{

        }
    }

    render() {
            if (this.state.redirect) {
                return <Redirect push to="/datatable" />;
            }


        return (

            <form >

                <div className="group">
      <input name="user" type="text"  /><span className="highlight"></span><span className="bar"></span>
          <label>Name</label>
  </div>
        <div className="group">
            <input name="password" type="password"  /><span className="highlight"></span><span className="bar"></span>
                <label>Passwort</label>
        </div>
        <button onClick={this.login} className="button buttonBlue">Login
            <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
        </button>
                <Greeting isLoggedIn={false} />
    </form>


    );
    }
}

export default Login;
