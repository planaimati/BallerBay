import React from "react";
import Hero from "../components/Hero";
import mainBcg from "../images/mainBcg.jpeg";
import { MainLink } from "../Theme/MainLink";

function HomePage() {
  return (
    <>
      <Hero title="zafunduj sobie odrobinę luksusu" img={mainBcg}>
        <MainLink dark="true" to="/productpage">
          produkty
        </MainLink>
      </Hero>
    </>
  );
}

export default HomePage;
