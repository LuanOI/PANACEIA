import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 0 0;
  padding: 0 50px;
  background: rgb(214, 211, 211);
`;

export const Section = styled.section`
  margin: 3rem 0 0;
  padding: 0 50px;
  background: rgb(241, 239, 239);
  h5 {
    margin-top: 2em;
    font-size: 19px;
    margin-left: 14em;
  }
  @media (max-width: 789px) {
    padding: 0 0 2rem 0;
    text-align: center;
    h5 {
      margin: 2em;
      font-size: 15px;
    }
  }
`;

export const Section1 = styled.section`
  border: 1px solid;
  border-image: linear-gradient(227.91deg, #a8fe75 0%, #46aa41 100%) 1;
  font-size: 14px;
  margin: 1rem;
  display: flex;
  align-items: center;
  h1 {
    text-align: center;
    margin: 20px;
    padding: 25px;
  }
  h2 {
    text-align: center;
    margin: 18px;
    padding: 15px;
    font-size: 15px;
  }
  @media (max-width: 1380px){
    font-size: 13px;
    text-align: center;
  }
  @media (max-width: 1210px) {
    display: block;
    div {
      width: 93%;
      height: 7rem;
    }
    h1 {
      margin: 15px;
      padding: 29px;
      font-size: 15px;
    }
  }
`;

export const Div = styled.div`
  background-image: linear-gradient(91deg, #a8fe75 0%, #46aa41 100%);
  margin: 10px;
  width: 19%;
  height: 7rem;
`;

export const Div1 = styled.div`
  background-image: linear-gradient(291deg, #a8fe75 0%, #46aa41 100%);
  margin: 10px;
  width: 19%;
  height: 7rem;
`;

export const Div2 = styled.div`
  background-image: linear-gradient(50deg, #a8fe75 0%, #46aa41 100%);
  margin: 10px;
  width: 19%;
  height: 7rem;
`;

export const Div3 = styled.div`
  background-image: linear-gradient(291deg, #a8fe75 0%, #46aa41 100%);
  margin: 10px;
  width: 19%;
  height: 7rem;
`;

export const Div4 = styled.div`
  background-image: linear-gradient(50deg, #a8fe75 0%, #46aa41 100%);
  margin: 10px;
  width: 19%;
  height: 7rem;
`;

export const Div5 = styled.div`
  margin: 5px 0 0 0;
  padding: 10px 0 0 0;
  h2 {
      text-align: center;
      font-size: 25px;
    }
  p {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    text-align: center;
    font-size: 18px;
  }
  @media (max-width: 1210px) {
    h2 {
      text-align: center;
      font-size: 18px;
    }
    p {
      text-align: center;
      font-size: 12px;
    }
  }
`;

export const Section2 = styled.section`
  @media (max-width: 1110px) {
    display: none;
  }
`;
