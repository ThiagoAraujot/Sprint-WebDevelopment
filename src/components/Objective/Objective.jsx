import ObjectiveContainer from "./ObjectiveStyled";
import kidImg from "../../assets/05.png";

function Objective() {
  return (
    <>
      <ObjectiveContainer id="objetivo">
        <div className="objetivo-img">
          <img src={kidImg} alt="" />
        </div>

        <div className="objetivo-txt">
          <h3 className="number-section">05</h3>
          <h4 className="title-section">Objetivo</h4>
          <p className="descricao">
            Transformar procedimentos médicos em
            <bold>emocionantes desafios</bold>, tornando cada momento no
            hospital uma aventura inesquecível para nossos pequenos heróis.
            Acreditamos que a jornada hospitalar das crianças pode ser mais do
            que apenas procedimentos médicos; pode ser uma emocionante aventura
            cheia de sorrisos, conquistas e heróis mirins!
          </p>
        </div>
      </ObjectiveContainer>
    </>
  );
}

export default Objective;
