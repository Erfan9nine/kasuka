import './Header.css'
import Tittle from'./Tittle';
import Poducts from './Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faDatabase, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faFileText } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import Product from './Products';



function  Header(){
    return (
        <div className="main__header__container">
            <div className="filter"></div>
            <div className='header__container'>

            
            <button className="beging">شروع</button>
            <nav className="nav-bar">
                <ul className='list'>
                    <li className='list__item'><a className='item__link active-item' href="#">خانه</a></li>
                    <li className='list__item'><a className='item__link' href="#">درباره</a></li>
                    <li className='list__item'><a className='item__link' href="#">خدمات</a></li>
                    <li className='list__item'><a className='item__link' href="#">نمونه کار</a></li>
                    <li className='list__item'><a className='item__link' href="#">ارتباط</a></li>
                </ul>
            </nav>
            <div className='logo__container'>
            <h1 className="logo">KASUKA</h1>
            <img className='logo-image' src="./img/icon/logo192.png" alt="" />
            </div>
        </div>
        <Tittle></Tittle>
        <div  className='products' >
       <Poducts name="اطلاغات " count={2} icon={faDatabase}>
        
       <FontAwesomeIcon icon={faDatabase} />
        </Poducts>
       <Poducts name="نمونه کار" count={0}>
       <FontAwesomeIcon icon={faHouse} />

       </Poducts>
       <Poducts count={2} name = "نمودارکیفی">
       <FontAwesomeIcon icon={faChartBar} />
        
       </Poducts>
       <Poducts name="متن نمایشی" count={0}>
       <FontAwesomeIcon icon={faFileText} />
    
        </Poducts>
       <Poducts name="عملکردپایانی" count={2}>
      <FontAwesomeIcon icon={faComment} />
        
        </Poducts>
        </div>
            </div>
    )
}
export default Header