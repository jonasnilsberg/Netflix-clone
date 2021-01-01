import React from "react";
import { Header } from "../components";
import OptForm from "./optform";
import * as ROUTES from "../constants/routes";

export default function HeaderContainer() {
  const backgroundImage = "/images/misc/home-bg.jpg";
  return (
    <Header backgroundImage={backgroundImage}>
      <Header.Nav>
        <Header.Logo src="/images/misc/logo.png" alt="logo"></Header.Logo>
        <Header.Link href={ROUTES.SIGN_IN}>Sign In</Header.Link>
      </Header.Nav>
      <Header.Body>
        <Header.Title>Unlimited films, TV programmes and more.</Header.Title>
        <Header.SubTitle>Watch anywhere. Cancel at any time.</Header.SubTitle>
        <OptForm></OptForm>
      </Header.Body>
    </Header>
  );
}
