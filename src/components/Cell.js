import React from 'react';
import { StyledCell } from './styled_stuff/StyledCell';
import { PIECES } from '../pieces';

const Cell = ({ type }) => (
    <StyledCell type={type} color={PIECES[type].color} />
);

export default Cell;