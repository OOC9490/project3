import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 20px 0;
  padding: 10px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: #000;
  background: linear-gradient(slategrey, white, slategrey);
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  :hover {
    background: linear-gradient(white, slategrey, white);
  }
`;

const GameButton = ({ callback, text }) => (
  <StyledButton onClick={callback}>{text}</StyledButton>
);

export default GameButton;
