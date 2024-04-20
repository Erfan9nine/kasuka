import "./seccond-tittle.css";
import MAin__tittle from './Seccondery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

export default function Seccond_tittle() {
  return (
    <div className="seccont__tittle-container">
      <div className="tittel__container-items">
        <div className="tittle__container-first">
          <img
            className="tittle__container-first__image"
            src="./img/image/wallpaperflare-cropped.jpg"
            alt=""
          />
        </div>
<div>

        <MAin__tittle  topic="تبلیغ سختی است
" tittle="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند

">
          <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
        </MAin__tittle>
        <MAin__tittle  topic="تبلیغ سختی است
" tittle="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند

">
          <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
        </MAin__tittle>
        <MAin__tittle  topic="تبلیغ سختی است
" tittle="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند

">
          <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
        </MAin__tittle>
        <MAin__tittle  topic="تبلیغ سختی است
" tittle="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند

">
          <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
        </MAin__tittle>
        </div>
      </div>
    </div>
  );
}
