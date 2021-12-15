import styled from "styled-components";

export const Nav = styled.nav`
  width: 85%;
  mask-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 25%,
    #ffffff 75%,
    rgba(255, 255, 255, 0) 100%
  );
  margin: 3rem auto 0;
  @media (max-width: 789px) {
    display: block;
    width: 100%;
    text-align: center;
  }
  ul {
    margin: 5px 0;
    text-align: center;
    background: linear-gradient(
      99deg,
      transparent -8%,
      #9ef76b,
      rgb(70, 170, 65) 49%,
      #9ef76b 99%,
      transparent 1%
    );
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1),
      inset 0 0 1px rgba(228, 225, 225, 0.6);
  }

  li {
    display: inline-block;
    @media (max-width: 780px) {
      display: flex;
      width: 100%;
      margin: 0px;
    }
  }
  a {
    padding: 1rem 2rem;
    font-weight: bold;
    font-family: "Open Sans";
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.959);
    text-decoration: none;
    display: block;
    &:hover {
      box-shadow: 0 0 20px rgb(23 39 15), inset 0 0 10px rgb(255 255 255 / 60%);
      background: rgba(160, 243, 160, 0.733);
      color: rgba(10, 138, 21, 0.938);
      transition: all 0.2s ease-in;
    }
    @media (max-width: 789px) {
      text-align: center;
      display: block;
      width: 100%;
    }
  }
`;
