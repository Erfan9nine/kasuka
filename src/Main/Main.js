import './Main.css'
import Article from './Article'
import ArticleIcons from './ArticleIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Seccond_tittle from './Seccond_tittle'
import Third__tittle from './Third__tittle'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

export default function Main(){
    return (
        <div className="main__container">
            <Article>
       <FontAwesomeIcon icon={faPencil} />
                
            </Article>
            <ArticleIcons></ArticleIcons>
            <Seccond_tittle></Seccond_tittle>
            <div className="third__tittle-caption">
          <h6>خدمات </h6>
          <h1>خدمات ما رابرسی کنید</h1>
        </div>
            <div className='third'>

            <Third__tittle>
       <FontAwesomeIcon icon={faPencil} />

            </Third__tittle>        <Third__tittle>
       <FontAwesomeIcon icon={faPencil} />

            </Third__tittle>        <Third__tittle>
       <FontAwesomeIcon icon={faPencil} />

            </Third__tittle>        <Third__tittle>
       <FontAwesomeIcon icon={faPencil} />

            </Third__tittle>
            </div>

        </div>
    )
}
