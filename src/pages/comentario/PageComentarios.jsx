import { React, useEffect, useState } from "react";
import Comentario from "../../components/comentario/Comentario";

import { Container, Button1, Form, Dividir, Div2 } from "../../assets/style/StyleComunidadeGlobal";

function PageComentarios(props) {
  let id = "";

  if (props.match.path.toLowerCase().includes("depo")) {
    id = props.match.params.id;
  }

  // MÉTODO GET
  const [depoimentos, setDepoimentos] = useState([]);

  useEffect(() => {
    // "https://panaceia.azurewebsites.net/rest/brief/"
    fetch("/rest/brief/")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setDepoimentos(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // MÉTODO DELETE
  const removerComentario = (idDepoimento) => {
    // "https://panaceia.azurewebsites.net/rest/brief/"
    fetch("/rest/brief/" + idDepoimento, {
      method: "delete",
    })
      .then(() => {
        window.location = "/depo/" + id;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // MÉTODO POST
  const [novoDepoimento, setNovoDepoimento] = useState({
    id: "",
    idComunidade: id,
    titulo: "",
    comentario: "",
  });

  const adicionarDepoimento = (evento) => {
    evento.preventDefault();
    // "https://panaceia.azurewebsites.net/rest/brief/"
    fetch("/rest/brief/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoDepoimento),
    }).then(() => {
      window.location = "/depo/" + id;
    });
  };

  const digitacao = (evento) => {
    setNovoDepoimento({
      ...novoDepoimento,
      [evento.target.name]: evento.target.value,
    });
  };

  return (
    <Container>
      <h1>Depoimentos da comunidade</h1>
      {depoimentos.map((depoimento) => (
        <Comentario
          key={depoimento.id}
          idComunidade={id}
          data={new Date()}
          idDepoimento={depoimento.idComunidade}
          // eslint-disable-next-line 
          nome={id == depoimento.idComunidade ? depoimento.titulo : null} 
          // eslint-disable-next-line 
          comentario={id == depoimento.idComunidade ? depoimento.comentario : null} 
         // eslint-disable-next-line 
          onRemove={removerComentario.bind(this, depoimento.id)}> 
          {id === depoimento.idComunidade ? depoimento.comentario : null}
        </Comentario>  
      ))}
      <Form onSubmit={adicionarDepoimento}>
          <h3>Compartilhe um depoimento com a comunidade</h3>
        <Dividir>
          <input
            type="text"
            name="titulo"
            value={depoimentos.titulo}
            onChange={digitacao}
            required
            placeholder="Digite seu nome"
          />
        </Dividir>
        <Div2>
          <textarea
            name="comentario"
            value={depoimentos.comentario}
            onChange={digitacao}
            required
            rows="4"
            placeholder="Escreva seu depoimento..."
          />
        </Div2>
        <Button1 type="submit">Publicar Comentário</Button1>
      </Form>
    </Container>
  );
}

export default PageComentarios;
