import "./ProductList.css";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  if (!products.length) {
    return <p className="empty">No hay productos para mostrar.</p>;
  }

  return (
    <section className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </section>
  );
}
