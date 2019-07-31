import {Modal} from 'react-bootstrap';
import React from 'react';
import Cart from '../Cart'
import * as commomAction from '../../common/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const CartModal = (props) => {
    const {showModal, toggleModal, showSuccessModal, toggleSuccessModal} = props;
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
            <Cart showSuccessModal={showSuccessModal} toggleSuccessModal={toggleSuccessModal} />
          </Modal.Body>
        </Modal>
      </>
    );
}

const mapDispatchToProps = (dispatch) => ({
  toggleSuccessModal: bindActionCreators(commomAction.toggleSuccessModal, dispatch)
})

export default connect(null, mapDispatchToProps)(CartModal);


