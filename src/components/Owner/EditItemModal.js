import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import EditForm from './EditItemForm';

function EditItemModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditForm
          change={props.change}
          currentItem={props.currentItem}
          onHide={props.onHide}
          submit={props.submit}
          setSubmit={props.setSubmit}
          name={props.name}
          email={props.email}
          id={props.id}
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

export default EditItemModal;
