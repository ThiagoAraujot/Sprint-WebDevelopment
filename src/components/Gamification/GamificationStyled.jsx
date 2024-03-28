import styled from "styled-components";

const GamificationContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.215);

  div.gamification-txt {
    width: 650px;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  div.gamification-img img {
    width: 30rem;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.466));
  }

  @media screen and (max-width: 1347px) {
    div.gamification-img img {
      width: 15rem;
    }
  }
`;

export default GamificationContainer;
