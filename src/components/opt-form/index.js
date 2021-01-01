import React, { useContext, createContext } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Inner,
  Title,
  Form,
  Input,
  SubmitButton,
} from "./styles/opt-form";

const InputContext = createContext();

export default function OptForm({ children, ...restProps }) {
  const { register, handleSubmit, errors } = useForm();
  return (
    <Container {...restProps}>
      <InputContext.Provider value={{ register, handleSubmit, errors }}>
        <Inner>{children}</Inner>
      </InputContext.Provider>
    </Container>
  );
}

OptForm.Title = function OptFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

OptForm.Form = function OptFormForm({ children, ...restProps }) {
  const { handleSubmit } = useContext(InputContext);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} {...restProps}>
      {children}
    </Form>
  );
};

OptForm.Input = function OptformInput({ children, ...restProps }) {
  const { register } = useContext(InputContext);
  return <Input ref={register({ required: true })} {...restProps}></Input>;
};

OptForm.SubmitButton = function OptFormSubmitButton({
  children,
  ...restProps
}) {
  return (
    <SubmitButton type="submit" {...restProps}>
      {children}
    </SubmitButton>
  );
};
