import { React, useState, useEffect } from "react";
import { Container, FormButton } from "../../assets/style/StyleGlobal";
import styled from "styled-components";

export const Section = styled.section`
  background: rgb(255, 255, 255);
  border-radius: 2%;
  margin: 1rem 8% 2rem;
  text-align: center;
  padding: 10px;
  span {
    font-weight: bold;
    color: rgb(12, 139, 1);
    text-align: center;
    margin: 2px;
  }
  button {
    margin: 20px;
    font-size: 15px;
  }
  h2 {
    font-size: 16px;
    font-weight: bold;
  }
  p {
    text-align: justify;
    margin: 5px;
    font-size: 14px;
  }
  @media (max-width: 783px) {
    height: 100%;
    margin: 10px 2% 2px;
    h2 {
      font-size: 14px;
    }
    p {
      font-size: 11px;
    }
  }
`;

function Termos() {
  function aceitouTermos() {
    if (document.getElementById("termos-ok").checked) {
      window.location.replace("./questionario/" + ultimaPosicao.id);
    } else {
      alert("Você precisa aceitar os Termos para continuar.");
    }
  }

  // MÉTODO GET
  const [usuarios, setUsuarios] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  // "https://panaceia.azurewebsites.net/rest/user/"
  useEffect(() => {
    fetch("/rest/user/")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setUsuarios(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var ultimaPosicao =
    usuarios[Object.keys(usuarios)[Object.keys(usuarios).length - 1]];
  console.log(ultimaPosicao);

  useEffect(() => {}, [usuarios]);

  return (
    <>
      <Container>
        <Section>
          <span>
            <h2>Termos de Uso Panace.IA</h2>
            <h3>Leia com atenção</h3>
          </span>
          <p>
            Você concorda, através do seu uso desta página, que você não vai
            postar qualquer material que seja falso, difamatório, impreciso,
            abusivo, vulgar, odioso, assediador, obsceno, profano, sexualmente
            orientado, ameaçador, invasivo da privacidade de uma pessoa,
            material adulto, ou de outra forma em violação de qualquer lei
            internacional. Você também concorda em não publicar nenhum material
            protegido por direitos autorais, a menos que você possua os direitos
            autorais ou tenha o consentimento por escrito do proprietário do
            material protegido por direitos autorais. Spam, inundações,
            anúncios, cartas em cadeia, esquemas de pirâmide e solicitações
            também são proibidos nesta página web. Note-se que é impossível para
            o pessoal ou os proprietários desta página web confirmar a validade
            dos posts e nós não somos responsáveis pelo conteúdo contido dentro.
            Não garantimos a exatidão, completude ou utilidade de qualquer
            informação apresentada. As mensagens postadas expressam a opinião do
            autor, e não necessariamente as opiniões das comunidades construídas
            nessa plataforma ou dos proprietários desta página web.
          </p>
          <p>
            Qualquer um que sinta que uma mensagem postada é censurável é
            encorajado a notificar um administrador ou moderador da comunidade
            ou da página imediatamente. Os administrados e os proprietários
            desta página reservam-se o direito de remover conteúdo censurável,
            dentro de um prazo razoável, se determinarem que a remoção é
            necessária. Este é um processo manual, no entanto, por favor,
            perceba que eles podem não ser capazes de remover ou editar
            mensagens específicas imediatamente. Esta política também se aplica
            às informações do perfil dos usuários. Você permanece responsável
            pelo conteúdo de suas mensagens postadas. Os proprietários desta
            página web também se reservam o direito de não revelar suas
            identidades (ou quaisquer outras informações relacionadas coletadas
            neste serviço) no caso de uma reclamação formal ou ação judicial
            decorrente de qualquer situação causada pelo seu uso desta página
            web. Com esta conta de usuário que você está prestes a se registrar,
            você concorda em nunca dar sua senha para outra pessoa, para sua
            proteção e por razões de validade. Você também concorda em NUNCA
            usar a conta de outra pessoa por qualquer motivo. Também
            recomendamos que você use uma senha complexa e única para sua conta,
            para evitar o roubo de contas. Observe que a cada postagem, seu
            endereço IP é gravado, caso você precise ser banido desta página web
            ou do seu ISP contatado. Isso acontecerá no caso de violação deste
            acordo ou das diretrizes das comunidades que você estiver fazendo
            parte. Se você usar um servidor proxy, seu registro NÃO será
            aprovado. Observe também que será feita um questionário logo após se
            registar na página do qual será obrigatório responder para o uso da
            página, sendo armazenado de forma segura respeitando a Lei Geral de
            Proteção de Dados e todas as informações obtidas deste questionário
            a fim de medir o grau de assertividade do refúgio on-line (página
            web).
          </p>
          <div>
            <input type="checkbox" id="termos-ok" name="aceitar-termos"></input>
            <label for="aceitar-termos">
              Aceito e estou de acordo com as condições.
            </label>
          </div>

          <FormButton onClick={() => aceitouTermos()}>
            {" "}
            Aceitar Termos
          </FormButton>
        </Section>
      </Container>
    </>
  );
}

export default Termos;
