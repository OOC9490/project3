import React from 'react';
import { StyledStartButton } from './styled_stuff/StyledStartButton';

const StartButton = ({ callback }) => (
    <StyledStartButton onclick={ callback }>
        Start Game
    </StyledStartButton>
);

export default StartButton;