import styled from "styled-components";

export const Container = styled.section`
  background: rgb(247, 246, 246);
  opacity: 98%;
  border-radius: 5px;
  padding: 1rem 3rem 3rem;
  margin: 3rem 8% 3rem;
  height: 100%;
  text-align: center;
  justify-content: center;
  div {
    min-width: 20px;
  }
  h2 {
    margin: 2px;
    padding: 2px;
    font-size: 25px;
    font-weight: bold;
    color: rgb(12, 139, 1);
    text-align: center;
    @media (max-width: 789px) {
      font-size: 15px;
      margin: 5px;
      padding: 5px;
    }
  }
  @media (max-width: 789px) {
    margin: 3rem 3% auto;
    padding: 10px;
    height: 100%;
  }
`;
