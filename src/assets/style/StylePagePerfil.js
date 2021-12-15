import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 21rem;
  label {
    color: rgb(223, 211, 211);
  }
`;

export const FormWrapper = styled.div`
  background-color: rgba(5, 5, 5, 0.993);
  opacity: 98%;
  overflow: hidden;
  padding: 0 0 30px;
  margin: 3rem auto 1.5rem;
  width: 900px;
  height: 670px;
  font-family: Quicksand, arial, sans-serif;
  border-radius: 5px;
  img {
    height: 5rem;
    width: 12%;
  }
  @media (max-width: 783px) {
    margin: 3rem 3% auto;
    padding: 5px;
    height: 42rem;
    width: 92%;
    img {
      height: 3rem;
      width: 15%;
    }
  }
`;
export const FormHeader = styled.header`
  margin: 9px 0 5px;
  padding: 9px;
  h2 {
    color: rgba(8, 184, 66, 0.993);
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
`;
export const FormBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;
export const FormFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  & + & {
    margin-top: 35px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;
export const FormInput = styled.input`
  padding: 12px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;
  margin-top: 5px;
  &:focus {
    border-bottom-color: rgb(255, 234, 0);
    outline: 0;
  }

  &:focus {
    &::-webkit-input-placeholder {
      position: relative;
      color: rgb(255, 234, 0);
      top: -10px;
      font-size: 13px;
      left: 4px;
    }
  }
`;

export const Input = styled.input`
  padding: 12px 0;
  width: 120px;
  font-family: inherit;
  font-size: 14px;
`;

//style botão editar pagina perfil
export const FormButton = styled.button`
  display: inline-block;
  width: 50%;
  align-items: center;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 234, 0);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

//style botão sair da pagina perfil
export const Button = styled.button`
  margin: 0 0 0 88%;
  display: inline-block;
  width: 10%;
  padding: 5px 0;
  text-align: center;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 234, 0);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
  @media (max-width: 783px) {
    font-size: 12px;
    margin: 0 0 0 85%;
    width: 19%;
  }
`;

export const Buttoon = styled.button`
  display: inline-block;
  margin: 2% 0 0 83%;
  width: 19%;
  padding: 5px;
  text-align: center;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 234, 0);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
  @media (max-width: 783px) {
    font-size: 12px;
    margin: 2% 0 0 82%;
    width: 25%;
  }
`;
