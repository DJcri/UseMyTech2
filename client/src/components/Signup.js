import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const formSchema = {
  username: "",
  password: "",
  passwordConfirm: "",
  role: "renter",
};

const Signup = () => {
  const [formValues, setFormValues] = useState(formSchema);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const createAccount = () => {
    axios
      .post("https://use-my-tech2.herokuapp.com/api/auth/register", formValues)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <SignupDiv className="signup">
      <h1>SIGNUP</h1>

      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Enter username"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="passwordConfirm"
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Choose Account Type</Form.Label>
        <Form.Control onChange={handleChange} name="role" as="select">
          <option>renter</option>
          <option>owner</option>
        </Form.Control>
      </Form.Group>

      <Button onClick={createAccount} variant="primary" size="lg">
        Signup
      </Button>
    </SignupDiv>
  );
};

export default Signup;

const SignupDiv = styled.form``;
