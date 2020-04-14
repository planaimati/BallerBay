import React from "react";
import Contact from "../components/Contact/Contact";
import styled from "styled-components";

function ContactPage() {
  return (
    <Section>
      <Contact></Contact>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ContactPage;
