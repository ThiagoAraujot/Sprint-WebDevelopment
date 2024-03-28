import styled from "styled-components";

const NegativesContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;

  div.impactos-txt {
    width: 650px;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  div.impactos-img img {
    width: 25rem;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.466));
    padding-bottom: 5em;
  }

  @media screen and (max-width: 1347px) {
    div.impactos-img img {
      width: 15rem;
    }
  }
`;

export default NegativesContainer;
