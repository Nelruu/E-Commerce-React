import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">© {new Date().getFullYear()} Nelson E-Commerce</p>
      </div>
    </footer>
  );
}
