import React, { Component } from 'react';
import './App.scss';
import Diamonds from './components/Diamonds.js';


class App extends Component {

  render() {
    const urls = [
      {
        'default': 'http://bennettfeely.com/clippy/pics/pittsburgh.jpg',
      },
      {
        'default': 'http://bennettfeely.com/clippy/pics/pittsburgh.jpg',
      },
      {
        'default': 'http://bennettfeely.com/clippy/pics/pittsburgh.jpg',
      },
      {
        'default': 'http://bennettfeely.com/clippy/pics/pittsburgh.jpg',
      },
      {
        'default': 'http://bennettfeely.com/clippy/pics/pittsburgh.jpg',
      },
      {
        'default': 'http://bennettfeely.com/clippy/pics/pittsburgh.jpg',
      },
      {
        'default': 'http://bennettfeely.com/clippy/pics/pittsburgh.jpg',
      },
      {
        'default': 'http://bennettfeely.com/clippy/pics/pittsburgh.jpg',
      },
      {
        'default': 'http://bennettfeely.com/clippy/pics/pittsburgh.jpg',
      }
    ];

    return (
      <div className="App">
        <header className="App-header">
          <h1>hi</h1>
        </header>
        <main className="App-main">
          <Diamonds data={urls} />
        </main>
      </div>
    );
  }
}

export default App;
