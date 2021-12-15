import React, { Component } from "react";
import Carrossel from "../../components/home/Carrossel";

import {
  Title,
  StyledContainer,
  Section,
  Container,
} from "../../assets/style/StyleGlobal";

class PageHome extends Component {
  render() {
    return (
      <>
        <Container>
          <Section>
            <Title>Sejam Bem vindos a Panace I.A</Title>
            <h3>
              “Onde a busca em tornar a felicidade e o autocuidado serem rotina
              na vida de todas as pessoas!”
            </h3>
          </Section>
          <StyledContainer>
            <Carrossel />
          </StyledContainer>
        </Container>
      </>
    );
  }
}
export default PageHome;
