import React, { useState } from 'react';
import { Formik } from 'formik';
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap';
import yup from 'yup';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const [itemInfo, setItemInfo] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    available: '',
    payment_type: '',
    picture: '',
    sub_category: '',
    condition: '',
  });

  const handleChange = e => {
    //
    setItemInfo({
      ...itemInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    console.log(itemInfo);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Item Name"
            value={itemInfo.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={itemInfo.description}
            maxLength="100"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Price</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="number"
              name="price"
              onChange={handleChange}
              placeholder="Price"
              aria-describedby="inputGroupPrepend"
              value={itemInfo.price}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please input a price.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Category" as="select" required>
            <option>Cameras</option>
            <option>Camera Accessories </option>
            <option>Lighting</option>
            <option>3D Printers</option>
            <option>Computers</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select a category.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationFormik04">
          <Form.Label>Condition</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            placeholder="Condition"
            name="condition"
            value={itemInfo.condition}
            as="select"
            required
          >
            <option>New</option>
            <option>Like New </option>
            <option>Used</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label># Available</Form.Label>
          <Form.Control
            type="text"
            placeholder="# of Items Available"
            name="available"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide number of units available.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Payment Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Payment Type"
            as="select"
            name="payment_type"
            required
          >
            <option>Online</option>
            <option>Meet Up</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please provide a payment type.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group></Form.Group>
      <Button className="submit-button" type="submit">
        Submit form
      </Button>
    </Form>
  );
}

export default FormExample;

// <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         ...schema,
//         name: 'Item Name',
//         description: 'Description',
//       }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         handleBlur,
//         values,
//         touched,
//         isValid,
//         errors,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Row>
//             <Form.Group as={Col} md="4" controlId="validationFormik01">
//               <Form.Label>Item Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 isValid={touched.name && !errors.name}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.name}
//               </Form.Control.Feedback>
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="4" controlId="validationFormik02">
//               <Form.Label>Description (Max: 100 Chars.)</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="description"
//                 value={values.description}
//                 onChange={handleChange}
//                 isValid={touched.description && !errors.description}
//                 maxLength="100"
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.description}
//               </Form.Control.Feedback>
//               <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup>
//                 <InputGroup.Prepend>
//                   <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 </InputGroup.Prepend>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} md="6" controlId="validationFormik03">
//               <Form.Label>Category</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Category"
//                 name="category"
//                 value={values.category}
//                 onChange={handleChange}
//                 isInvalid={!!errors.category}
//                 as="select"
//                 required
//               >
//                 <option>Cameras</option>
//                 <option>Camera Accessories </option>
//                 <option>Lighting</option>
//                 <option>3D Printers</option>
//                 <option>Computers</option>
//               </Form.Control>
//               <Form.Control.Feedback type="invalid">
//                 {errors.category}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="6" controlId="validationFormik04">
//               <Form.Label>Condition</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Condition"
//                 name="condition"
//                 value={values.category}
//                 onChange={handleChange}
//                 isInvalid={!!errors.condition}
//                 as="select"
//                 required
//               >
//                 <option>New</option>
//                 <option>Like New </option>
//                 <option>Used</option>
//               </Form.Control>
//               <Form.Control.Feedback type="invalid">
//                 {errors.condition}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik05">
//               <Form.Label># Available</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="# Available"
//                 name="available"
//                 value={values.available}
//                 onChange={handleChange}
//                 isInvalid={!!errors.available}
//                 required
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.available}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <Form.Group as={Col} md="3" controlId="validationFormik06">
//               <Form.Label>Payment Type</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Payment Type"
//                 name="payment_type"
//                 value={values.payment_type}
//                 onChange={handleChange}
//                 isInvalid={!!errors.payment_type}
//                 as="select"
//                 required
//               >
//                 <option>Online</option>
//                 <option>Meet Up</option>
//               </Form.Control>

//               <Form.Control.Feedback type="invalid">
//                 {errors.payment_type}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Form.Row>
//           <Form.Group>
//             <Form.Check
//               required
//               name="picture"
//               label="Agree to picture and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.picture}
//               feedback={errors.picture}
//               id="validationFormik0"
//               required
//             />
//           </Form.Group>
//           <Button
//             className="submit-button"
//             type="submit"
//             onClick={console.log(schema)}
//           >
//             Submit Form
//           </Button>
//         </Form>
//       )}
//     </Formik>
