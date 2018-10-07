import React from 'react';
import Modal from 'react-modal';

const ModalWindow = (props) => (
    <Modal
        isOpen={props.showModal}
        className="Modal"
        overlayClassName="Overlay"
    >
    <h2>Final Score</h2>
    <h3>Questions Asked: {props.questionCounter}</h3>
    <h3>Answered Correctly : {props.score}</h3>
    <h3>Correct {props.score / (props.questionCounter /100)}%</h3>
    <button className="modal-button" onClick={props.closeModal}>Close</button>



    </Modal>
);

export default ModalWindow;


