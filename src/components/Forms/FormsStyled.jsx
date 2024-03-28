import styled from "styled-components";

const FormsContainer = styled.section`
  margin: auto;
  width: 100%;
  height: 130vh;
  display: flex;
  gap: 1em;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  form {
    display: flex;
  }

  .form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 650px;
    padding: 2em;
  }

  div.form-txt {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 650px;
    padding: 2em;
  }

  div.form-txt input {
    padding: 0.7em 1em;
    border-radius: 8px;
    border: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.404);

    font-size: 18px;
    outline: unset;
  }

  .form-txt button {
    padding: 1em;
    background-color: #63b3ff;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    margin-top: 20px;

    font-size: 1em;
    color: #fff;
  }

  .form-txt button:hover {
    box-shadow: 0px 0px 15px #63b4ff9a;
  }

  .form-txt button:active {
    scale: 0.95;
    background-color: #1b65a6;
    transition: 0.2s;
  }

  label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .form-label {
    text-align: left;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
  }

  .form-img {
    width: 20rem;
  }

  .change-color {
    color: red;
    transition: 0.2s;

    text-align: left;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
  }

  .change-color-2 {
    color: green;
    transition: 0.2s;

    text-align: left;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
  }

  .change-color-3 {
    color: rgb(255, 255, 255);

    text-align: left;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
  }

  #usuario-cadastrado {
    padding: 1em;
    color: rgb(255, 255, 255);

    text-align: center;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
  }

  .banner-subtitle {
    color: rgba(255, 255, 255, 0.84);
    text-align: center;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 2.0625rem */
    letter-spacing: 0.15rem;
  }

  .banner-title {
    text-align: center;
    font-size: 9rem;
    font-style: normal;
    font-weight: 800;
    line-height: 110%; /* 12.375rem */
    letter-spacing: -0.3375rem;
    text-transform: uppercase;
    background: linear-gradient(
      179deg,
      #fff 0.83%,
      #eaf5ff 52.12%,
      #b9ddff 86.15%,
      #63b3ff 92.35%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    user-select: none;
  }

  @media screen and (max-width: 1080px) {
    .form-img {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .form-img {
      display: none;
    }
    .banner-subtitle {
      margin-top: 1em;
    }

    .banner-title {
      font-size: 5em;
    }
  }
`;

export default FormsContainer;
