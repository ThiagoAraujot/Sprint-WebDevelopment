import GamificationContainer from "./GamificationStyled";
import kidImg from "../../assets/_0008.png";

function Gamification() {
  return (
    <>
      <GamificationContainer id="gamification">
        <div className="gamification-txt">
          <h3 className="number-section">04</h3>
          <h4 className="title-section">Gamificação</h4>
          <p className="descricao">
            A <bold>gamificação</bold> é uma abordagem que incorpora elementos e
            mecânicas de jogos em contextos não relacionados a jogos, com o
            objetivo de tornar atividades mais
            <bold>envolventes e motivadoras</bold>.
          </p>
          <p className="descricao">
            Com isso em mente, nossa proposta é um aplicativo mobile que abstrai
            toda etapa anterior ao procedimento de forma <bold>lúdica</bold> e
            divertida para os nossos pequenos heróis.
          </p>
        </div>

        <div className="gamification-img">
          <img src={kidImg} />
        </div>
      </GamificationContainer>
    </>
  );
}

export default Gamification;
