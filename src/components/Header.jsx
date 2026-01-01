import "./Header.css";

export default function Header({ storeName }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <span className="header__logo">🛒</span>
          <h1 className="header__title">{storeName}</h1>
        </div>
      </div>
    </header>
  );
}
