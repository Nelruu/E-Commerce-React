import { useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { products } from "./data/products";
import "./index.css";

export default function App() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;

    return products.filter((p) =>
      `${p.name} ${p.category}`.toLowerCase().includes(q)
    );
  }, [query]);

  const handleAdd = (product) => {
    alert(`Agregado: ${product.name}`);
  };

  return (
    <div className="app">
      <Header storeName="E-Commerce React" />

      <main className="main">
        <div className="container">
          <SearchBar value={query} onChange={setQuery} />
          <p className="muted">Mostrando: {filtered.length}</p>
          <ProductList products={filtered} onAdd={handleAdd} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
