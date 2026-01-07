import "./Header.css";

export default function Header({ storeName, cartCount, onCartOpen }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <span className="header__logo">🛒</span>
          <h1 className="header__title">{storeName}</h1>
        </div>

        <button className="header__cart" onClick={onCartOpen}>
          <span className="header__cartIcon">🛍️</span>
          <span className="header__cartText">Carrito</span>
          <span className="header__badge">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}
