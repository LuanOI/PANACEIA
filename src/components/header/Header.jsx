import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import Logo from "../../assets/img/logo.png";
import Menu from "../../pages/menu/PageMenu";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: inline-block;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    #9ef76b,
    rgb(70, 170, 65) 49%,
    #9ef76b 100%
  );
  height: 99px;
  img {
    position: absolute;
    height: 80px;
    width: 80px;
    padding: 10px 95px 0 0;
  }
`;

const Stylednovo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  p {
    position: relative;
    margin: 0 0 0 145px;
    padding-top: 2rem;
    font-size: 35px;
    font-weight: bold;
  }
`;
class Header extends Component {
  render() {
    return (
      <>
        <StyledHeader>
          <Stylednovo>
            <img src={Logo} alt="logo do site"></img>
            <p>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Panaceia")
                    .pauseFor(2000)
                    .deleteChars(10)
                    .typeString("Panace IA")
                    .start(2000);
                }}
              />
            </p>
          </Stylednovo>
          <Menu />
        </StyledHeader>
      </>
    );
  }
}
export default Header;
