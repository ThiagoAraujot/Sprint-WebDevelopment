import styled from "styled-components";

const PublicContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4em;

  div.public-img img {
    width: 25rem;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.466));
  }

  div.public-txt {
    width: 650px;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  @media screen and (max-width: 1347px) {
    div.public-img img {
      width: 15rem;
    }
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 2em;
    text-align: center;
  }
`;

export default PublicContainer;