import React from "react";
import styled from "styled-components";

function Hero({ img, title, max, children }) {
  return (
    <HEROWRAPPER img={img} max={max}>
      <BANNER>
        <p className="title">{title}</p>

        {children}
      </BANNER>
    </HEROWRAPPER>
  );
}

const HEROWRAPPER = styled.div`
  width: 100vw;
  color: white;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.img});
  background-size: cover;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;
const BANNER = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    text-transform: uppercase;
    font-size: 4rem;
    letter-spacing: ${(props) => props.theme.spacing.mainSpacing};
    color: ${(props) => props.theme.color.mainWhite};
    margin: 0;

    @media (max-width: 700px) {
      font-size: 2rem;
    }
  }
`;
export default Hero;
