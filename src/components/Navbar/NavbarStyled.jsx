import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em 0;
  position: fixed;
  top: 0;
  z-index: 1000;

  &.scroll {
    background: linear-gradient(
      117deg,
      #6cc5d9 1.3%,
      #6cc5d9 48.79%,
      #1b65a6 100%
    );
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.249);
  }

  .nav-logo {
    display: flex;
    align-items: center;

    .logo {
      width: 80px;
    }

    .nav-logo-txt {
      color: #0086c5;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
  }

  .nav-list {
    display: flex;
    gap: 2em;
    list-style-type: none;
    .nav-txt {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-decoration: none;

      &:hover {
        color: #1b65a6;
        transition: 0.2s;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .nav-logo {
      display: flex;
    }

    .nav-list {
      display: none;
    }
  }
`;
