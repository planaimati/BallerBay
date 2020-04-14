import React from "react";
import styled from "styled-components";

function Title({ title }) {
  return (
    <TITLEWRAPPER>
      {title}
      <div className="underline"></div>
    </TITLEWRAPPER>
  );
}

const TITLEWRAPPER = styled.div`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  .underline {
    height: 0.25rem;
    width: 10rem;
    background: ${(props) => props.theme.color.mainBlack};
    margin: 0 auto;
  }
`;

export default Title;
