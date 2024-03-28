import styled from "styled-components";

const ProblemaContainer = styled.section`
  width: 100%;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.215);
  margin-bottom: 4em;

  div.problema-txt {
    width: 650px;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  div.problema-img img {
    object-fit: cover;
    object-position: 50% 10%;
    width: 25rem;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.466));
  }

  @media screen and (max-width: 1347px) {
    div.problema-img img {
      width: 15rem;
    }
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 2em;
    text-align: center;
  }
`;

export default ProblemaContainer;
