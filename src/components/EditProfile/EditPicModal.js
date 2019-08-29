import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import EditPicForm from './EditPicForm';

function EditPicModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Change Profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditPicForm
          id={props.id}
          pic={props.pic}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button className="modal-button" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPicModal;
