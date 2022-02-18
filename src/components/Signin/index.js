import React from "react";
import {
  FormContent,
  FormInput,
  Container,
  FormWrap,
  Icon,
  FormH1,
  FormLabel,
  Text,
  FormButton,
  Form,
} from "./StyledSigninElems";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Mula</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" id="email" required />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput type="password" id="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
