import ProblemaContainer from "./ProblemStyled";
import kidImg from "../../assets/2-girl.png"

function Problem() {
  return (
    <>
      <ProblemaContainer id="problema">
      <div className="problema-txt">
        <h3 className="number-section">02</h3>
        <h4 className="title-section">Problemática</h4>
        <p className="descricao">
          Na jornada hospitalar, cada detalhe conta. E sabemos que a falta de
          informações pode gerar mais do que dúvidas; pode criar
          <bold> ansiedades</bold> e tornar desafios ainda mais complexos. Mas e
          se pudéssemos transformar esses desafios em oportunidades para
          aventuras emocionantes?
        </p>
      </div>

      <div className="problema-img">
        <img
          src={kidImg}
          alt="menina criança em animação 3d"
        />
      </div>
    </ProblemaContainer>
    </>
  );
}

export default Problem;