import React from 'react';
import { render } from 'react-dom';
import { store } from './store/store';
import App from './pages/App';
import '../css/login.css';

render((
    <App store={store}/>
), document.getElementById('app'));