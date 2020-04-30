export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Creates the game board to be rendered into the page
export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    );