import "./ProductCard.css";
import Button from "./Button";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="card">
      <img className="card__img" src={product.image} alt={product.name} />
      <div className="card__body">
        <span className="card__category">{product.category}</span>
        <h3 className="card__title">{product.name}</h3>
        <p className="card__price">${product.price.toLocaleString("es-CL")}</p>
        <div className="card__actions">
          <Button variant="primary" onClick={() => onAdd(product)}>
            Agregar
          </Button>
          <Button variant="secondary" onClick={() => alert(product.name)}>
            Ver
          </Button>
        </div>
      </div>
    </article>
  );
}
