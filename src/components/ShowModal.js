import React from 'react';
import Modal from 'react-modal';

const ShowModal = (props) => {
    return (
        <div>
            <Modal isOpen={!!props.ShowModal} onRequestClose={props.handleCloseDetails} contentLabel="Selected Show">
                <div>{!!props.ShowModal ? <p>{props.ShowModal.name}</p> : <p>No show selected</p>}</div> 
                <button onClick={props.handleCloseDetails}>Close</button>
            </Modal>
            
        </div>
    )
}

export default ShowModal;