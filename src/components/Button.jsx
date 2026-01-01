import "./Button.css";

export default function Button({ variant = "primary", children, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className={`btn btn--${variant}`}>
      {children}
    </button>
  );
}
