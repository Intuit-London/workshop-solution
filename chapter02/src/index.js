import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.css';

// https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
var AppFactory = React.createFactory(App);
var start = new Date().getTime();

setInterval(function() {
  // https://facebook.github.io/react/docs/top-level-api.html#reactdom.render
  ReactDOM.render(
    AppFactory({elapsed: new Date().getTime() - start}),
    document.getElementById('root')
  );
}, 100);
