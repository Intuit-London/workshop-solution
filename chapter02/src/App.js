import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
      var elapsed = Math.round(this.props.elapsed  / 100);
      var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
      var message =
        'React has been successfully running for ' + seconds + ' seconds.';

      return (
        <div>{message}</div>
      );
  }
}

export default App;
