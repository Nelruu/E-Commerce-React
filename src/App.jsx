import { useMemo, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";
import { products } from "./data/products";
import "./index.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => `${p.name} ${p.category}`.toLowerCase().includes(q));
  }, [query]);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.qty, 0), [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((x) => x.id === product.id);
      if (found) {
        return prev.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const increase = (id) => {
    setCart((prev) => prev.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x)));
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );
  };

  return (
    <div className="app">
      <Header storeName="E-Commerce React" cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      <main className="main">
        <div className="container">
          <SearchBar value={query} onChange={setQuery} />
          <p className="muted">Mostrando: {filtered.length}</p>
          <ProductList products={filtered} onAdd={addToCart} />
        </div>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onIncrease={increase}
        onDecrease={decrease}
      />
    </div>
  );
}
