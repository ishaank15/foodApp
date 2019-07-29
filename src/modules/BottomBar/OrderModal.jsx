import {Modal} from 'react-bootstrap';
import React from 'react';
import Cart from '../Cart'

const CartModal = (props) => {
    const {showModal, toggleModal} = props;
    if(!showModal) return null
    return (
      <>
        <Modal
          show={showModal}
          onHide={() => toggleModal(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              {'Cart Details'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Cart/>
          </Modal.Body>
        </Modal>
      </>
    );
}
export default CartModal;