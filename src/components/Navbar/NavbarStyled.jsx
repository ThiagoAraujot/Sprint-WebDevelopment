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
`;
