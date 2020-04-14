import styled from "styled-components";

export const SmallContainerLeft = styled.div`
  background-image: url(https://images.pexels.com/photos/3380158/pexels-photo-3380158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 0 0 20px;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SmallContainerRight = styled.div`
  border-radius: 0px 20px 20px 0px;
  background: black;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    border-radius: 20px 20px 20px 20px;
  }
`;
