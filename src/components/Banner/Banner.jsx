import zebraImg from "../../assets/1-zebra.svg";
import BannerContainer from "./BannerStyled";

function Banner() {
  return (
    <>
      <BannerContainer>
        <div className="banner-txt">
          <h2 className="banner-subtitle">Bem-vindo(a) ao nosso site!</h2>
          <h1 className="banner-title">HC GAMING</h1>
          <p className="banner-descricao">
            Uma iniciativa voltada á proporcionar a melhor experiência para
            crianças e adolescentes, transformando toda sua jornada hospitalar
            divertida e intuitiva através de jogos!
          </p>
          <a href="#public">
            <button className="banner-button">Saiba Mais</button>
            <div className="home-scroll">
              <span className="home-scroll-name">Scroll down</span>
              <span className="material-symbols-outlined">
                keyboard_double_arrow_down
              </span>
            </div>
          </a>
        </div>

        <img id="zebra-img" src={zebraImg} alt="" />
      </BannerContainer>
    </>
  );
}

export default Banner;
