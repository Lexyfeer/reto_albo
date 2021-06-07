import React, { Component } from 'react';
import './App.css';
import AllFilms from './components/AllFilms';
import AllPosts from './components/AllPosts';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Reto ALBO</h1>
        <AllFilms />
        <AllPosts />
      </div>
    );
  }
}

export default App;
