import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import FaqsContainer from "../containers/faqs";
import Header from "../containers/header";
import OptForm from "../containers/optform";

export default function Home() {
  return (
    <>
      <Header></Header>
      <JumbotronContainer></JumbotronContainer>
      <FaqsContainer></FaqsContainer>
      <OptForm></OptForm>
      <FooterContainer></FooterContainer>
    </>
  );
}
