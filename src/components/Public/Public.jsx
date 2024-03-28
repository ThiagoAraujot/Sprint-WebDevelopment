import PublicContainer from "./PublicStyled";
import kidImg from "../../assets/1-girl.png";

function Public() {
  return (
    <>
      <PublicContainer id="public">
        <div className="public-img">
          <img src={kidImg} alt="menina criança em animação 3d" />
        </div>

        <div className="public-txt">
          <h3 className="number-section">01</h3>
          <h4 className="title-section">Sobre o público</h4>
          <p className="descricao">
            No <bold>HC Gaming</bold> transformamos a jornada hospitalar das
            crianças em uma emocionante aventura! Para nossos pequenos heróis,
            cada missão é uma conquista, e cada procedimento é uma oportunidade
            para aprender e se divertir.
          </p>
          <p className="descricao">
            Pais e responsáveis, somos seus aliados na busca por uma experiência
            positiva e compreensível. Para a equipe médica, o HC Gaming é uma
            ferramenta para tornar o trabalho ainda mais extraordinário. Juntos,
            estamos transformando a jornada da saúde infantil em momentos
            mágicos e inesquecíveis.
          </p>
        </div>
      </PublicContainer>
    </>
  );
}

export default Public;
