import { useState, useCallback } from 'react';

import { PIECES, randomPiece } from '../pieces';
import { STAGE_WIDTH } from '../gameHelpers';

export const usePlayer = () => {
  const [ player, setPlayer ] = useState({
    //initial game state for the player
    pos: { x: 0, y: 0},
    pieces: randomPiece().shape,
    collided: false
  });

  return [player];
};
