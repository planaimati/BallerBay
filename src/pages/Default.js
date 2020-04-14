import React from "react";
import Hero from "../components/Hero";
import { MAINH1 } from "../Theme/H1";
import { MainLink } from "../Theme/MainLink";

function Default() {
  return (
    <Hero title="404">
      <MAINH1>nie znaleziono strony</MAINH1>
      <MainLink to="/">Strona główna</MainLink>
    </Hero>
  );
}

export default Default;
