import React, { Component } from 'react';

import '../App.css';
import Login from "./Login"
import Datatable from "./Datatable"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

class Nav extends Component {



    render() {
        return (


            <Router>
            <span>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">

                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/login" className="navbar-brand">Studienarbeit</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">

                            <li><Link to="/datatable">Todolist</Link></li>

                        </ul>

                    </div>
                </div>

            </nav>
                <Route  path="/login" component={Login}/>
                 <Route path="/datatable" component={Datatable}/>

                </span>

            </Router>


        );
    }
}

export default Nav;
