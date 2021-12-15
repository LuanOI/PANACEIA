import React from "react";
import { Container, Avatar, Conteudo } from "./StyledComunidade";
import { Link } from "react-router-dom";

import imagemComunidade from "../../assets/img/comunidade.jpg";

const Comunidades = (props) => {
  return (
    <Container>
      <Avatar src={imagemComunidade} alt={props.titulo} />
      <Conteudo>
        <Link title="Depoimentos" to={`/depo/${props.id}`}>
          {props.titulo}
        </Link>
        <p>{props.children}</p>
        <button onClick={props.onRemove}>&times;</button>
      </Conteudo>
    </Container>
  );
};

export default Comunidades;
