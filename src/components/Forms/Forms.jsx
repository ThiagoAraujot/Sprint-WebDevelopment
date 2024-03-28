import FormsContainer from "./FormsStyled";
import img1 from "../../assets/07.svg";
import img2 from "../../assets/_0003.svg";

function Forms() {
  return (
    <>
      <FormsContainer id="form">
        <div className="banner-txt">
          <h2 className="banner-subtitle">Faça parte dessa iniciativa!</h2>
          <h1 className="banner-title">HC GAMING</h1>
          <form action="">
            <img src={img1} alt="" className="form-img" />

            <div className="form-txt">
              <label id="label-nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                name=""
                id="input-nome"
                placeholder="Nome completo"
                required
              />

              <label id="label-email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                name=""
                id="input-email"
                placeholder="Seu melhor email"
                required
              />

              <label id="label-senha" className="form-label">
                Senha
              </label>
              <input
                type="password"
                name=""
                id="input-senha"
                placeholder="Sua melhor senha"
                required
              />

              <button id="botao" type="button">
                Fazer parte
              </button>

              <div id="usuario-cadastrado"></div>
            </div>

            <img src={img2} alt="" className="form-img" />
          </form>
        </div>
      </FormsContainer>
    </>
  );
}

export default Forms;
