import styled from "styled-components";

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 1.6em;
    font-weight: 800;
    color: #070707f0;
  }

  img {
    width: 50%;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 18px;
    background-color: #C6E94A;
    color: black;
    font-size: 1rem;
    cursor: pointer;

    i {
      margin-right: 0.5rem;
    
    }

    &:hover {
      transition: .3s ease-in-out;
      box-shadow: 1px 1px 10px #C6E94A;
    }
  }
`;

export default ErrorContainer;
