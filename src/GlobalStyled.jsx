import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
 
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  list-style-type: none;
}

html {
  scroll-behavior: smooth;
}

body {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    117deg,
    #6cc5d9 1.3%,
    #6cc5d9 48.79%,
    #1b65a6 100%
  );
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 12px;
}

body::-webkit-scrollbar-track {
  background: rgb(127, 127, 127);
}

body::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 20px;
  border: 3px solid rgb(127, 127, 127);
}

a {
  text-decoration: none;
}

bold {
  font-weight: 700;
  color: #c6e94a;
}

.number-section {
    color: rgba(242, 255, 252, 0.53);
    font-size: 7rem;
    font-style: normal;
    font-weight: 700;
    line-height: 110%; /* 10.3125rem */
  }

  .title-section {
    color: #fff;
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 110%; /* 5.5rem */
  }

  .descricao {
    color: rgba(255, 255, 255, 0.85);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 2rem */
    text-align: justify;
  }
`;

export default GlobalStyled;
