import { Modal } from 'react-bootstrap';
import React from 'react';

const SuccessModal = (props) => {
    const { showModal, toggleModal } = props;
    if(!showModal) return null
    return (
        <Modal
            show={showModal}
            size="sm"
            onHide={() => toggleModal(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-modal-sizes-title-sm"        >
            <Modal.Header>
                <Modal.Title id="example-modal-sizes-title-sm">
                    {'Order Successfully Placed'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="cart-container">
                    <div className="success">
                        {'Your order is on it\'s way and will be delivered in 30 minutes.'}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
export default SuccessModal;