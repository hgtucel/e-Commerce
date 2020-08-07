import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userActions";

export const RegisterScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");

  const userRegister = useSelector((state) => state.registerReducer);
  const { loading, userInfo, error } = userRegister;

  const dispatch = useDispatch();

  useEffect(()=>{
      if(userInfo) {
          props.history.push("/");
      }
  },[userInfo])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Re Password</Label>
        <Input
          type="password"
          name="rePassword"
          onChange={(e) => setRePassword(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Name</Label>
        <Input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};
