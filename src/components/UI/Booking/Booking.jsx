import React from "react";
import "./Booking.css";
import { Form, FormGroup } from "reactstrap";

const Booking = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormGroup className="booking__form required d-inline-block me-4 mb-4">
          <input type="text" placeholder="First Name" required/>
        </FormGroup>
        {/* <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input type="text" placeholder="Middle Name" />
        </FormGroup> */}
        <FormGroup className="booking__form required d-inline-block me-4 mb-4">
          <input type="text" placeholder="Last Name" required/>
        </FormGroup>

        <FormGroup className="booking__form required d-inline-block me-4 mb-4">
          <input type="email" placeholder="Email" required/>
        </FormGroup>
        <FormGroup className="booking__form required d-inline-block me-4 mb-4">
          <input type="number" placeholder="Phone Number" required />
        </FormGroup>

        <FormGroup className="booking__form required d-inline-block me-4 mb-4">
          <input type="text" placeholder="From" required/>
        </FormGroup>
        <FormGroup className="booking__form required d-inline-block me-4 mb-4">
          <input type="text" placeholder="To" required/>
        </FormGroup>

        <FormGroup className="booking__form required d-inline-block me-4 mb-4">
          <select name="" id="" required>
            <option value="1 person">1 Person</option>
            <option value="2 person">2 Person</option>
            <option value="3 person">3 Person</option>
            <option value="4 person">4 Person</option>
            <option value="5+ person">5+ Person</option>
          </select>
        </FormGroup>

        <FormGroup className="booking__form required d-inline-block me-4 mb-4">
          <select name="" id="" required>
            <option value="1 luggage">1 luggage</option>
            <option value="2 luggage">2 luggage</option>
            <option value="3 luggage">3 luggage</option>
            <option value="4 luggage">4 luggage</option>
            <option value="5+ luggage">5+ luggage</option>
          </select>
        </FormGroup>

        <FormGroup className="booking__form required d-inline-block me-4 mb-4">
          <input type="date"  required placeholder="Adventure date..." />
        </FormGroup>
        <FormGroup className="booking__form required d-inline-block me-4 mb-4">
          <input
            type="time"
            placeholder="Adventure starts..."
            className="time__picker"
            required
          />
        </FormGroup>

        <FormGroup>
          <textarea
            rows={5}
            type="textarea"
            className="textarea"
            placeholder="Hey adventurer! Why don't you write me your thoughts?"
          />
        </FormGroup>
      </Form>
    </>
  );
};

export default Booking;
