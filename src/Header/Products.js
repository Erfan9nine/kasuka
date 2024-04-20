import './Products.css'
export default function Product({name,count,children}){
    return(
        
        <div className="container-pro">
            <i className='childs'>{children}</i>
            <p>{name}</p>
        </div>
    )
}