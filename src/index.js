import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ELearning from './ELearning';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Movies from './Movies';

ReactDOM.render(<Movies/> ,
document.getElementById('bkfs'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

