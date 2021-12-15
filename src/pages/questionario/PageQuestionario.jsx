import { React, useState, useEffect } from "react";
import {
  Container,
  Section,
  Span,
  StyledQuestionario,
  FormButton,
} from "../../assets/style/StyleGlobal";
import {
  Modal,
  ModalContent2021,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "../../assets/style/StyleModal";

const Questionario = (props) => {
  var scoreAnsiedade = 0;
  var contaResposta = 0;

  let id = "";

  let idUsuaria = null;

  if (props.match.path.toLowerCase().includes("questionario")) {
    idUsuaria = props.match.params.id;
  }

  const [novoQuestionario, setNovoQuestionario] = useState({
    id: id,
    idUsuario: "",
    escala: 0,
  });

  function enviarQuestionario() {
    calcularScore();
    if (contaResposta < 7) {
      return alert("Você precisa responder todas as perguntas!");
    }
    setNovoQuestionario({
      id: id,
      idUsuario: idUsuaria,
      escala: `${scoreAnsiedade}`,
    });
  }

  function calcularScore() {
    for (let i = 0; i < document.querySelectorAll(".question").length; i++) {
      if (document.getElementsByClassName("question")[i].checked) {
        contaResposta += 1;
        let pergunta = document.getElementsByClassName("question")[i];
        scoreAnsiedade += parseInt(pergunta.value);
      }
    }
    return scoreAnsiedade;
  }

  useEffect(() => {
    if (novoQuestionario.escala !== 0) {
      // MÉTODO POST
      //"https://panaceia.azurewebsites.net/rest/survey/" "
      fetch("/rest/survey/"+ id, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoQuestionario),
      }).then(() => {
        window.location = "/interesses/" + idUsuaria;
      });
    } // eslint-disable-next-line
  }, [novoQuestionario]); 

  return (
    <>
      <Modal>
        <ModalContent2021>
          <ModalHeader>
            <Span>
              <h1>Questionário de Avaliação - Panace.IA</h1>
              <h3>Por favor, responda com sinceridade</h3>
            </Span>
          </ModalHeader>

          <Container>
            <ModalBody>
              <Section>
                <StyledQuestionario>
                  <h2>1 - Eu me sinto tensa ou contraída:</h2>
                  <label>
                    <input type="radio" class="question" name="1" value="3" />A
                    maior parte do tempo
                  </label>
                  <label>
                    <input type="radio" class="question" name="1" value="2" />
                    Boa parte do tempo
                  </label>
                  <label>
                    <input type="radio" class="question" name="1" value="1" />
                    <span>de vez em quando</span>
                  </label>
                  <label>
                    <input type="radio" class="question" name="1" value="0" />
                    nunca
                  </label>
                </StyledQuestionario>

                <StyledQuestionario>
                  <h2>
                    2 - Eu sinto uma espécie de medo, como se alguma coisa ruim
                    fosse acontecer:
                  </h2>
                  <input type="radio" class="question" name="3" value="3" />
                  sim, de jeito muito forte
                  <input type="radio" class="question" name="3" value="2" />
                  sim, mas não tão forte
                  <input type="radio" class="question" name="3" value="1" />
                  um pouco, mas isso não me preocupa
                  <input type="radio" class="question" name="3" value="1" />
                  não sinto nada disso
                </StyledQuestionario>

                <StyledQuestionario>
                  <h2>3 - Estou com a cabeça cheia de preocupações:</h2>
                  <input type="radio" class="question" name="5" value="3" />a
                  maior parte do tempo
                  <input type="radio" class="question" name="5" value="2" />
                  boa parte do tempo
                  <input type="radio" class="question" name="5" value="1" />
                  <span>de vez em quando</span>
                  <input type="radio" class="question" name="5" value="0" />
                  raramente
                </StyledQuestionario>

                <StyledQuestionario>
                  <h2>
                    4 - Consigo ficar sentada à vontade e me sentir relaxada:
                  </h2>
                  <input type="radio" class="question" name="7" value="0" />
                  sim, <span>quase sempre</span>
                  <input type="radio" class="question" name="7" value="1" />
                  muitas vezes
                  <input type="radio" class="question" name="7" value="2" />
                  <span>poucas vezes</span>
                  <input type="radio" class="question" name="7" value="3" />
                  nunca
                </StyledQuestionario>

                <StyledQuestionario>
                  <h2>
                    5 - Eu tenho uma sensação ruim de medo, como um frio na
                    barriga ou um aperto no estômago:
                  </h2>
                  <input type="radio" class="question" name="9" value="0" />
                  nunca
                  <input type="radio" class="question" name="9" value="1" />
                  <span>de vez em quando</span>
                  <input type="radio" class="question" name="9" value="2" />
                  muitas vezes
                  <input type="radio" class="question" name="9" value="3" />
                  <span>quase sempre</span>
                </StyledQuestionario>

                <StyledQuestionario>
                  <h2>
                    6 - Eu me sinto inquieta, como se eu não pudesse ficar
                    parada em lugar nenhum:
                  </h2>
                  <input type="radio" class="question" name="11" value="3" />
                  sim, demais
                  <input type="radio" class="question" name="11" value="2" />
                  bastante
                  <input type="radio" class="question" name="11" value="1" />
                  um pouco
                  <input type="radio" class="question" name="11" value="0" />
                  não me sinto assim
                </StyledQuestionario>

                <StyledQuestionario>
                  <h2>7 - De repente, tenho a sensação de entrar em pânico:</h2>
                  <input type="radio" class="question" name="13" value="3" />
                  <span>a quase todo momento</span>
                  <input type="radio" class="question" name="13" value="2" />
                  <span>várias vezes</span>
                  <input type="radio" class="question" name="13" value="1" />
                  <span>de vez em quando</span>
                  <input type="radio" class="question" name="13" value="0" />
                  <span>não senti isso</span>
                </StyledQuestionario>
              </Section>
            </ModalBody>

            <ModalFooter>
              <FormButton onClick={() => enviarQuestionario()}>
                Enviar Questionário
              </FormButton>
              <p>
                * Formulário baseado na escala HAD de estudo da Unesp sobre
                ansiedade, sem intuito de diagnosticar ou avaliar quaisquer
                sintomas.
              </p>
            </ModalFooter>
          </Container>
        </ModalContent2021>
      </Modal>
    </>
  );
};
export default Questionario;
