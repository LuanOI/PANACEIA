import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  width: 950px;
  background-color: #fff;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

export const ModalContent2 = styled.div`
  width: 100px;
  background-color: #fff;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
`;

export const ModalContent2021 = styled.div`
  width: 59rem;
  background-color: #fff;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  margin: 0;
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
export const ModalFooter = styled.div`
  padding: 10px;
`;

export const CheckImg = styled.div`
  padding: 5px;
  margin: 5px;
  input[type="checkbox"][id^="checkbox"] {
    display: none;
  }
  label {
    border: 1px solid #fff;
    padding: 10px;
    display: block;
    position: relative;
    margin: 10px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  label::before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 28px;
    transition-duration: 0.4s;
    transform: scale(0);
  }

  label img {
    height: 100px;
    width: 150px;
    border-radius: 4px;
    transition-duration: 0.2s;
    align-items: center;
    justify-content: center;
  }

  input[type="checkbox"]:checked + label {
    border-color: #ddd;
  }

  input[type="checkbox"]:checked + label::before {
    content: "✓";
    background-color: rgb(14, 192, 118);
    transform: scale(1);
  }

  input[type="checkbox"]:checked + label img {
    height: 100px;
    width: 150px;
    transform: scale(1);
    box-shadow: 0 0 5px #1d1d1d;
    z-index: -1;
  }
  span {
    font-family: Italianno;
    font-size: 35px;
    margin: 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FormButton2 = styled.button`
  display: inline-block;
  margin: 0 0 5px 5px;
  width: 25%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(8, 8, 8);
  background-color: rgb(14, 192, 118);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgb(41, 231, 152);
    transform: translate(0, -5px);
  }
  @media (max-width: 783px) {
    width: 50%;
  }
`;

export const FormButton3 = styled.button`
  display: inline-block;
  margin: 0 0 5px 5px;
  width: 25%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(8, 8, 8);
  background-color: rgb(178, 224, 205);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgb(110, 241, 187);
    transform: translate(0, -5px);
  }
  @media (max-width: 783px) {
    width: 50%;
    margin: 10px;
  }
`;
