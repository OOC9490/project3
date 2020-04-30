import React from 'react';
import Tetris from './components/Tetris';
import Navigation from './components/Navigation';
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px auto;
`;

const App = () => (
  <AppWrapper>
    <Navigation></Navigation>
    <Tetris />
  </AppWrapper>
);

export default App;
