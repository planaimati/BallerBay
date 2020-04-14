import React from "react";
import styled from "styled-components";
import { Section } from "../About/Section";
import { Container } from "../About/Containers";
import { Desc } from "../About/Desc";
import { Line } from "../About/Line";
import { H1 } from "../About/H1";
import { ImageContainer, TextContainer } from "./Containers";
import { Text } from "./Text";
import { FormDiv } from "./FormDiv";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { Submit } from "./Submit";
import { Form } from "./Form";

function Checkout() {
  return (
    <Section>
      <Container>
        <ImageContainer></ImageContainer>
        <TextContainer>
          <Text>
            <H1>Finalizacja zamówienia</H1>
            <Line></Line>
            <Desc>
              Aby sfinalizować zamówienie wyślij do mnie wiadomość za pomocą
              formularza poniżej, napisz jaki przedmiot Cię interesuje a na
              pewno się dogadamy. Możesz również odezwać się do mnie na
              facebooku.
            </Desc>
          </Text>
          <FormDiv>
            <Form action="https://formspree.io/myydlvez" method="POST">
              <Input type="text" name="firstName" placeholder="imię" />
              <Input type="email" name="email" placeholder="email" />
              <Input type="text" name="subject" placeholder="temat" />

              <TextArea name="message" placeholder="..."></TextArea>
              <Submit type="submit">wyślij</Submit>
            </Form>
          </FormDiv>
        </TextContainer>
      </Container>
    </Section>
  );
}

export default Checkout;
