import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    mainRGBA: "rgba(0,0,0, 0.5)",
    mainBlack: "#222",
    mainWhite: "#FFF",
    mainGrey: "#5F5E5E"
  },

  spacing: {
    mainSpacing: "0.3rem"
  },

  transition: {
    mainTransition: "all 0.3s ease-in-out"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
