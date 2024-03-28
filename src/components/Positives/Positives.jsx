import PositivesContainer from "./PositivesStyled";
import kidImg from "../../assets/06.png";

function Positives() {
  return (
    <>
      <PositivesContainer id="positivos">
        <div className="positivos-txt">
          <h3 className="number-section">06</h3>
          <h4 className="title-section">Impactos positivos</h4>
          <p className="descricao">
            <bold>Adesão ao Tratamento Aumentada:</bold>
            <br />
            HC Gaming impacta diretamente a adesão ao tratamento, promovendo
            resultados mais eficazes e positivos, ao tornar os exames mais
            agradáveis.
          </p>

          <p className="descricao">
            <bold>Ansiedade Transformada em Desafios:</bold>
            <br />
            Mudamos a narrativa da ansiedade para desafios emocionantes. Cada
            exame é agora uma jornada, reduzindo a tensão e criando um ambiente
            mais acolhedor para as crianças.
          </p>
        </div>

        <div className="positivos-img">
          <img src={kidImg} alt="" />
        </div>
      </PositivesContainer>
    </>
  );
}

export default Positives;
