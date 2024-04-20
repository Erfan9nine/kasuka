import './secondry.css'
export default function Seccond_tittle({ topic, tittle, children }) {
  return (
    <div className="tittle__container-seccond">
      <section>
        <span className="tittle__container-seccond__icon"><i>{children}</i></span>
        <span className="tittle__container-seccond__writes">
          <h1 className="tittle__container-seccond__tittle">{topic}</h1>
          <p className="tittle__container-seccond__caption">{tittle}</p>
        </span>
      </section>
    </div>
  );
}
