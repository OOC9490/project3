import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
 
const OpenControls = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="info" onClick={toggle}>Instructions</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Game Controls & Notes</ModalHeader>
                <ModalBody>
                    <ul>
                        <li>Press the "Start Game!" button to begin a new game (available when the game first loads and in the event of a "Game Over"</li>
                        <li>Use the Arrow Keys on your keyboard to control the piece currently falling</li>
                        <li>The aim of the game is to place the falling Tetrominos in a way that they fill a row or rows on the gameboard</li>
                        <li>The speed of the game increases for every 10 rows you clear, but so do the point rewards!</li>
                        <li>The game ends when your a piece hits the top of the board...</li>
                    </ul>
                </ModalBody>
                <ModalFooter>
                <Button color="danger" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default OpenControls;