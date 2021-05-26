import axios from "axios";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const formSchema = {
  username: "",
  password: "",
};

const Login = (props) => {
  const history = useHistory();
  const { setToken, setRole } = props;
  const [formValues, setFormValues] = useState(formSchema);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const login = () => {
    axios
      .post("https://use-my-tech2.herokuapp.com/api/auth/login", formValues)
      .then((res) => {
        const { token, role } = res.data;
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          setToken(token);
          setRole(role);
          history.push("myequipment");
        }
      });
  };

  return (
    <LoginDiv className="login">
      <h1>LOGIN</h1>

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

      <Button onClick={login} variant="primary" size="lg">
        Login
      </Button>
    </LoginDiv>
  );
};

export default Login;

const LoginDiv = styled.form``;
