import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SuccessModal = ({ toggle, isOpen, className }) => {

    return (
        <Modal isOpen={isOpen} onClick={toggle} className={className}>
            <ModalHeader onClick={toggle}>Congratulations!</ModalHeader>
            <ModalBody>
                The event form has submitted successfully!
        </ModalBody>
            <ModalFooter>
                <Button onClick={toggle} color="white" outline className="custom-btn text-uppercase font-weight-bold" >Close</Button>
            </ModalFooter>
        </Modal>
    );
}

export default SuccessModal;