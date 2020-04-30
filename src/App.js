import React from 'react';
import Tetris from './components/Tetris';
import Navigation from './components/Navigation';

const App = () => (
  <div className="App">
    <Navigation></Navigation>
    <Tetris />
  </div>
);

export default App;
