import React, { Component } from 'react';

import '../App.css';

import Datatable from './Datatable';
import Login from './Login';
import Nav from './Nav';



import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

class App extends Component {






  render() {
    return (
       <Datatable/>





    );
  }
}

export default App;
