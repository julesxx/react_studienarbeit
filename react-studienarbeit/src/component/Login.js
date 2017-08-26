import React, { Component } from 'react';

import '../App.css';


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: 'Please write an essay about your favorite DOM element.'
        };
    }

    state = {
        redirectToReferrer: false
    }



    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })
    }

    render() {
        return (

            <form >
  <div className="group">
      <input type="text" value={this.props.name}  /><span className="highlight"></span><span className="bar"></span>
          <label>Name</label>
  </div>
        <div className="group">
            <input type="password"/><span className="highlight"></span><span className="bar"></span>
                <label>Passwort</label>
        </div>
        <button onClick={this.login} className="button buttonBlue" value="Submit">Login
            <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
        </button>

    </form>


    );
    }
}

export default Login;
