import React, { useEffect, useState } from "react";
import {
  Container,
  Logo,
  Link,
  Title,
  SubTitle,
  Nav,
  Body,
} from "./styles/header";

export default function Header({
  backgroundImage,
  render,
  children,
  ...restProps
}) {
  useEffect(() => {
    console.log("UseEffect on mount");
  }, []);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <Container backgroundImage={backgroundImage} {...restProps}>
      {children}
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <div>Counter: {count}</div>
    </Container>
  );
}

Header.Nav = ({ children, ...restProps }) => {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Body = ({ children, ...restProps }) => {
  return <Body {...restProps}>{children}</Body>;
};

Header.Logo = ({ children, ...restProps }) => {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

Header.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Header.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
