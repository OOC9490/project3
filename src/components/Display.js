import React from 'react';
import { StyledDisplay } from './styled_stuff/StyledDisplay';

const Display = ({ gameOver, text }) => (
    <StyledDisplay>
        {text}
    </StyledDisplay>
);

export default Display;