import React from "react";
import "./FindCarForm.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <>
      <Form className="form">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className="form__group">
            <input type="text" placeholder="From address" required />
          </FormGroup>

          <FormGroup className="form__group">
            <input type="text" placeholder="To address" required />
          </FormGroup>

          <FormGroup className="form__group">
            <input type="date" placeholder="Adventure Date" required />
          </FormGroup>

          <FormGroup className="form__group">
            <input
              className="adventure__time"
              type="time"
              placeholder="Adventure Time"
              required
            />
          </FormGroup>

          <FormGroup className="select__group">
            <select>
              <option value="ac">AC Car</option>
              <option value="non-ac">Non-AC Car</option>
            </select>
          </FormGroup>

          <FormGroup className="select__group">
            <button className="find__car-btn">Find One</button>
          </FormGroup>
        </div>
      </Form>
    </>
  );
};

export default FindCarForm;
