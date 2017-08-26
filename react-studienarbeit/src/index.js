import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import Login from'./component/Login'
import Datatable from'./component/Datatable'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <App/>




    , document.getElementById('root'));
registerServiceWorker();
