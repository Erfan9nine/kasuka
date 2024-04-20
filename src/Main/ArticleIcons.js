import './ArticleIcons.css';

export default function ArticleIcons(){
    return (
        <div className="icons__under__tittle__container">

        
        <div className="icons__under__tittle">
        <img src="./img/icon/client-1.png" className='icon__under__tittle' alt="" />
        <img src="./img/icon/client-2.png" className='icon__under__tittle' alt="" />
        <img src="./img/icon/client-3.png" className='icon__under__tittle' alt="" />
        <img src="./img/icon/client-4.png"  className='icon__under__tittle' alt="" />
        
      </div>
      <div className='circle__icon__under__tittle'>
          <span className="circles">.</span>
          <span className="circles">.</span>
          <span className="circles">.</span>
          <span className="circles">.</span>
        </div>
      </div>
    )
}