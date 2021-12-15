import React from "react";
import ImagemAutocuidado from "../../assets/img/imgcomunidade/cuidado.jpg";
import ImagemSaude from "../../assets/img/imgcomunidade/saudef.jpg";
import Mulheres1 from "../../assets/img/imgcomunidade/auto1.jpg";
import Mulheres2 from "../../assets/img/imgcomunidade/auto2.jpg";
import Mulheres3 from "../../assets/img/imgcomunidade/auto3.jpg";
import Mulheres4 from "../../assets/img/imgcomunidade/auto4.jpg";
import {
  SectionPrimeira,
  Div,
  Divi,
} from "../../assets/style/StyleComunidadeGlobal";

let site ="https://www.vestimentarte.com.br/2020/06/autocuidado-o-que-e-principais-tipos.html";
let site1 ="https://g1.globo.com/pa/santarem-regiao/noticia/2021/10/04/campanha-do-outubro-rosa-abre-com-acao-na-casa-de-saude-da-mulher-e-doacao-de-sangue.ghtml";
let site2 ="https://www.dicasdemulher.com.br/7-dicas-de-alimentacao-saudavel-para-mulheres-muito-ocupadas/";
let site3 = "https://blog.psicologiaviva.com.br/inteligencia-emocional/";
let site4 ="https://bacabal.ifma.edu.br/wp-content/uploads/sites/15/2020/05/Cartilha-ou-Ebook-Ansiedade-e-distanciamento-1.pdf";
let site5 ="https://www.sesi-ce.org.br/blog/impactos-do-exercicio-fisico-na-saude-da-mulher/";

function InfoComunidade() {
  return (
    <>
      <SectionPrimeira>
        <Divi>
          <img src={ImagemAutocuidado} alt="Autocuidado Feminino" />
          <p>
            <a href={site} target="_blank" rel="noreferrer">
              <span>
                "Autocuidado deve ser o cuidado consigo mesma, atenção às
                próprias necessidades do corpo, mentais e psicológicas"
              </span>
            </a>{" "}
            O principal elemento do autocuidado deve ser a atenção voltada para
            si mesmo, para as próprias necessidades e aspirações. Devendo
            cuidar de todos os nossos principais aspectos como seres humanos: o
            físico, o mental e o emocional.
          </p>
        </Divi>
        <Div>
          <img src={ImagemSaude} alt="cuidados infantil" />
          <p>
            No{" "}
            <a href={site1} target="_blank" rel="noreferrer">
              <span>Outubro Rosa</span>
            </a>
            , médicas refletem sobre como é preciso estruturar a rotina para
            cuidar da saúde e prevenir o câncer que mais afeta mulheres. Para
            vencer o estigma, o receio, o peso que a cerca. Ao passar por um
            prédio iluminado de rosa durante este mês, faça uma reflexão. Se
            você é mulher, já fez seus exames de rotina este ano ?
          </p>
        </Div>
      </SectionPrimeira>
      <SectionPrimeira>
        <Divi>
          <img src={Mulheres1} alt="Alimentação Saudável" />
          <p>
            <a href={site2} target="_blank" rel="noreferrer">
              <span>Alimentação Saudável para Mulheres</span>
            </a>{" "}
            Mulheres ocupadas podem muitas vezes não perceber, mas precisam
            fazer da alimentação saudável uma prioridade para que possam manter
            seu ritmo de vida com saúde e continuar expressando sua inteligência
            e dinamismo.
          </p>
        </Divi>
        <Divi>
          <img src={Mulheres2} alt="Ansiedade" />
          <p>
            <a href={site4} target="_blank" rel="noreferrer">
              <span>
                Ansiedade em tempos de Pandemia e Distanciamento Social
              </span>
            </a>{" "}
            Múltiplos fenômenos fisiológicos e mentais, relacionados ao estado
            de preocupação consciente de uma pessoa diante de um evento futuro
            não desejado ou medo de uma situação real.
          </p>
        </Divi>
      </SectionPrimeira>
      <SectionPrimeira>
        <Div>
          <img src={Mulheres3} alt="Inteligência Emocional" />
          <p>
            <a href={site3} target="_blank" rel="noreferrer">
              <span>Como Desenvolver a Inteligência Emocional </span>
            </a>{" "}
            Para que alguém seja bem-sucedido acadêmica e profissionalmente,
            faz-se necessária uma boa dose de dedicação, esforço e disciplina
            disso, a maioria das pessoas sabe. O que muitos ignoram é o fato de
            que desenvolver inteligência emocional (IE) auxilia não só nesses
            processos intelectuais, mas em todos os âmbitos da vida.
          </p>
        </Div>

        <Divi>
          <img src={Mulheres4} alt="Exercicio Físico" />
          <p>
            <a href={site5} target="_blank" rel="noreferrer">
              <span>Impactos do Exercicio Físico na Saúde da Mulher</span>
            </a>{" "}
            Os benefícios da prática de exercícios físicos para mulheres é a
            diminuição dos sintomas da depressão e ansiedade. Sendo comprovado
            por estudos fazer caminhada, andar de bicicleta ou praticar alguns
            exercícios, por exemplo, são práticas que diminuem os sintomas da
            depressão e da ansiedade.
          </p>
        </Divi>
      </SectionPrimeira>
    </>
  );
}

export default InfoComunidade;
