import React from "react";
import styled from "styled-components";
//styled components
import { Container } from "./Container";
import { SmallContainerLeft, SmallContainerRight } from "./SmallContainer";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { SubmitButton } from "./SubmitButton";

function Contact() {
  return (
    <Container>
      <SmallContainerLeft background={null}></SmallContainerLeft>
      <SmallContainerRight background="black">
        <Form action="https://formspree.io/myydlvez" method="POST">
          <XD>
            <H1>kontakt</H1>
            <Input type="text" name="firstName" placeholder="imię" />
            <Input type="email" name="email" placeholder="email" />
            <Input type="text" name="subject" placeholder="temat" />

            <TextArea name="message" placeholder="..."></TextArea>
            <SubmitButton type="submit">Wyślij</SubmitButton>
          </XD>
        </Form>
      </SmallContainerRight>
    </Container>
  );
}

const H1 = styled.h1`
  color: white;
  text-transform: capitalize;
  letter-spacing: 0.3rem;
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const XD = styled.div`
  width: 100%;
  justify-content: center;
  display: grid;
  grid-template-columns: 70%;
`;

export default Contact;
