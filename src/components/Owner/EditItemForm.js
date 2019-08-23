import React from 'react';
import { Formik } from 'formik';
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';
import yup from 'yup';

const schema =
  yup &&
  yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.string().required(),
    category: yup.string().required(),
    available: yup.string().required(),
    payment_type: yup.string().required(),
    picture: yup.bool().required(),
    sub_category: '',
  });

function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: 'Item Name',
        description: 'Desription',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.name && !errors.description}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Price</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  aria-describedby="inputGroupPrepend"
                  name="price"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category"
                name="category"
                value={values.category}
                onChange={handleChange}
                isInvalid={!!errors.category}
              />

              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label># Available</Form.Label>
              <Form.Control
                type="text"
                placeholder="# Available"
                name="available"
                value={values.available}
                onChange={handleChange}
                isInvalid={!!errors.available}
              />
              <Form.Control.Feedback type="invalid">
                {errors.available}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Payment Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Payment Type"
                name="payment_type"
                value={values.payment_type}
                onChange={handleChange}
                isInvalid={!!errors.payment_type}
              />

              <Form.Control.Feedback type="invalid">
                {errors.payment_type}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              name="picture"
              label="Agree to picture and conditions"
              onChange={handleChange}
              isInvalid={!!errors.picture}
              feedback={errors.picture}
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;
