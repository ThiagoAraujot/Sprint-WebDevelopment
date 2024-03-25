import { NavbarContainer } from "./NavbarStyled";
import logo from "../../assets/hc-logo.png";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <div className="nav-logo">
          <img className="logo" src={logo} alt="" />
          <p className="nav-logo-txt">Gaming</p>
        </div>
        <ul className="nav-list">
          <li>
            <a className="nav-txt" href="#banner">
              Home
            </a>
          </li>
          <li>
            <a className="nav-txt" href="#public">
              Público
            </a>
          </li>
          <li>
            <a className="nav-txt" href="#problema">
              Dores
            </a>
          </li>
          <li>
            <a className="nav-txt" href="#impactos">
              Impactos
            </a>
          </li>
          <li>
            <a className="nav-txt" href="#gamification">
              Projeto
            </a>
          </li>
          <li>
            <a className="nav-txt" href="#objetivo">
              Objetivo
            </a>
          </li>
          <li>
            <a className="nav-txt" href="#positivos">
              Benefícios
            </a>
          </li>
          <li>
            <a className="nav-txt" href="#form">
              Entre em contato
            </a>
          </li>
        </ul>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
