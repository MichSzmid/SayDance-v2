import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Navbar from './Components/Content/Header/Navbar';
import Header from './Components/Content/Header/Header';

import '../src/styles.css'

ReactDOM.render(<Navbar/>,document.getElementById('navbar'));
ReactDOM.render(<Header/>,document.getElementById('header'));
ReactDOM.render(<App/>,document.getElementById('content'));