import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 0 0;
  padding: 0 50px;
  background: rgb(247, 246, 246);
  h1 {
    text-align: center;
    margin: 12px;
    padding: 15px;
    font-size: 25px;
    font-weight: bold;
    color: rgb(12, 139, 1);
  }
  h3 {
    font-size: 20px;
    margin:10px 0 0 0;
    padding: 2px;
    font-weight: bold;
    color: rgb(12, 139, 1);
  }
  h6 {
    font-size: 23px;
    text-align: center;
    margin:0 0 20px;
    padding: 5px;
    font-weight: bold;
    color: rgb(12, 139, 1);
  }
  h2 {
    font-size: 20px;
    padding: 2px;
    font-weight: bold;
    color: rgb(12, 139, 1);
  }
  form {
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 1rem;
  }
  input,
  textarea {
    color: #4a5568;
    background-color: #fff;
    border: 1px solid #e2e8f0;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    display: block;
    border-radius: 0.5rem;
    @media (max-width: 789px) {
      width: 88%;
      height: 6rem;
    }
  }
  @media (max-width: 789px) {
    margin: 3rem 3% auto;
    display: block;
    padding: 15px;
    height: 100%;
    h1 {
      font-size: 16px;
    }
    h3,
    h2 {
      font-size: 14px;
    }
  }
`;

export const Button = styled.button`
  background-color: rgb(25, 121, 6);
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  &:hover {
    background-color: rgb(122, 243, 9);
    cursor: pointer;
  }
`;

export const Button1 = styled.button`
  background-color: rgb(25, 121, 6);
  color: #fff;
  margin:10px 0 0 0;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  &:hover {
    background-color: rgb(122, 243, 9);
    cursor: pointer;
  }
`;

//fomulario de criar comunidades
export const Form = styled.form`
  label {
    display: float;
    align-items: center;
    margin: 15px 10px 0 0;
  }
  textarea {
    width: 90%;
  }
  button {
    background-color: rgb(25, 121, 6);
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-left: 25px;
    border-radius: 0.5rem;
    border: none;
    &:hover {
      background-color: rgb(122, 243, 9);
      cursor: pointer;
    }
  }
`;

export const Dividir = styled.div`
  display: flex;
  margin: 10px;
  input {
    width: 50%;
  }
  @media (max-width: 789px) {
    input {
      width: 80%;
      height: 1.5rem;
    }
    label {
      margin: 15px;
      width: 2%;
    }
  }
`;

export const Div2 = styled.div`
  display: flex;
  margin: 10px;
  input {
    width: 50%;
  }
  @media (max-width: 789px) {
    textarea {
      margin: 2px;
      height: 3.5rem;
    }
    label {
      margin: 15px;
      width: 2%;
    }
  }
`;

export const Div1 = styled.div`
  display: flex;
  margin: 10px;
  input {
    width: 50%;
  }
  @media (max-width: 789px) {
    input {
      width: 80%;
      height: 1.5rem;
    }
    label {
      margin: 15px;
      width: 2%;
    }
  }
`;

// inicio do stilo da pag informaçoes para  pagecomunidade

export const Divi = styled.div`
  display: flex;
  margin: 0 0 10px;
  padding: 0 0 10px;
  img {
    width: 9rem;
    height: 10rem;
    border-radius: 5px;
  }
  a {
    color: rgb(194, 5, 131);
    font-weight: bold;
    font-size: 18px;
  }
  @media (max-width: 789px) {
    span {
      font-size: 14px;
      text-align: center;
    }
    img {
      position: relative;
      width: 8rem;
      height: 12rem;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  margin: 0 0 10px;
  padding: 0 0 10px;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 5px;
  }
  a {
    color: rgb(194, 5, 131);
    font-weight: bold;
    font-size: 16px;
  }
  @media (max-width: 789px) {
    span {
      font-size: 14px;
    }
    img {
      position: relative;
      width: 8rem;
      height: 13rem;
    }
  }
`;

export const SectionPrimeira = styled.section`
  white-space: wrap;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #46aa41;
  margin-bottom: 10px;
  p {
    font-size: 18.1px;
    text-align: justify;
    margin: 2px 27px 0 3px;
    padding: 3px;
  }
  @media (max-width: 789px) {
    display: block;
    font-size: 13px;
  }
`;

export const Divcvv = styled.div`
  background: #ec6c6c;
  h3{
    text-align: center;
    color:#f6fafa;
    font-size: 15px;
  }
  a {
    color:#f6fafa;
    font-weight: bold;
    font-size: 16px;
  }
`;