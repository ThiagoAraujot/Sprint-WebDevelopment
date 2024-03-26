import ErrorContainer from "./ErrorStyled";
import errorImg from "../../assets/error-img.svg";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <ErrorContainer>
        <h2>Sorry, Page not found!</h2>
        
        <Link to='/'>
          <button>
            <i className="bi bi-box-arrow-right"></i>
            Back to Home
          </button>
        </Link>
        <img src={errorImg} alt="" />
      </ErrorContainer>
    </>
  );
}

export default Error;
