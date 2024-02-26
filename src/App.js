import './App.css';

// abb: rcc - react class based components
import React, { Component } from 'react'

import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  name = 'Ayush Kumar'

  render() {
    return (
      <>
        <Navbar />
        <News />        

        <div>Hello {this.name} </div>
      </>
    )
  }
}
