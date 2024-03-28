import nurseImg from "../../assets/1- enfermeira.png";
import NegativesContainer from "./NegativesStyled";

function Negatives() {
  return (
    <>
      <NegativesContainer id="impactos">
        <div className="impactos-img">
          <img src={nurseImg} alt="enfermeira mulher sentada no chão" />
        </div>

        <div className="impactos-txt">
          <h3 className="number-section">03</h3>
          <h4 className="title-section">Impactos negativos</h4>
          <p className="descricao">
            <bold>Ansiedade excessiva</bold>
          </p>

          <p className="descricao">
            A ansiedade associada aos exames pode ser avassaladora. O HC Gaming
            entra em cena para reduzir esse impacto negativo, transformando o
            desconhecido em desafios mais gerenciáveis.
          </p>

          <p className="descricao">
            <bold>Estímulo à Cooperação</bold>
          </p>

          <p className="descricao">
            O medo e desconforto durante os exames resulta em menor colaboração.
            Nós procuramos encorajar uma participação mais ativa, criando um
            ambiente que motive as crianças a enfrentarem seus receios de
            maneira positiva.
          </p>
        </div>
      </NegativesContainer>
    </>
  );
}

export default Negatives;
