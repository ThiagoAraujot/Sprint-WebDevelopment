import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');  
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

html {
  scroll-behavior: smooth;
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

a {
  text-decoration: none;
}
`;

export default GlobalStyled;
