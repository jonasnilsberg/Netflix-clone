import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from "./styles/accordion";

const ItemIdContext = createContext();
const ActiveTabContext = createContext();

export default function Accordion({ children, ...restProps }) {
  const [activeItem, setActiveItem] = useState(-1);
  return (
    <ActiveTabContext.Provider value={{ activeItem, setActiveItem }}>
      <Container {...restProps}>
        <Inner>{children}</Inner>
      </Container>
    </ActiveTabContext.Provider>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ id, children, ...restProps }) {
  return (
    <ItemIdContext.Provider value={{ id }}>
      <Item {...restProps}>{children}</Item>
    </ItemIdContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { id } = useContext(ItemIdContext);
  const { activeItem, setActiveItem } = useContext(ActiveTabContext);
  return (
    <Header
      onClick={() => setActiveItem((prevId) => (prevId !== id ? id : -1))}
    >
      {children}
      {id === activeItem ? (
        <img src="/images/icons/close-slim.png" alt="close"></img>
      ) : (
        <img src="/images/icons/add.png" alt="open"></img>
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { id } = useContext(ItemIdContext);
  const { activeItem } = useContext(ActiveTabContext);
  return id === activeItem ? <Body {...restProps}>{children}</Body> : null;
};
