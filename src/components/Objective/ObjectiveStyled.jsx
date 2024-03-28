import styled from "styled-components";

const ObjectiveContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div.objetivo-txt {
    width: 650px;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  div.objetivo-img img {
    width: 20rem;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.466));
  }

  @media screen and (max-width: 1347px) {
    div.objetivo-img img {
      width: 15rem;
    }
  }
`;

export default ObjectiveContainer;