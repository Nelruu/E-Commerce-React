import "./CartDrawer.css";

export default function CartDrawer({ open, items, onClose, onIncrease, onDecrease }) {
  if (!open) return null;

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart">
      <div className="cart__overlay" onClick={onClose}></div>

      <aside className="cart__panel">
        <div className="cart__header">
          <h2 className="cart__title">Carrito</h2>
          <button className="cart__close" onClick={onClose}>
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="cart__empty">No hay productos agregados.</p>
        ) : (
          <div className="cart__list">
            {items.map((p) => (
              <div className="cart__item" key={p.id}>
                <img className="cart__img" src={p.image} alt={p.name} />
                <div className="cart__info">
                  <p className="cart__name">{p.name}</p>
                  <p className="cart__price">${p.price.toLocaleString("es-CL")}</p>

                  <div className="cart__qty">
                    <button className="cart__qtybtn" onClick={() => onDecrease(p.id)}>
                      -
                    </button>
                    <span className="cart__qtynum">{p.qty}</span>
                    <button className="cart__qtybtn" onClick={() => onIncrease(p.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart__footer">
          <div className="cart__total">
            <span>Total</span>
            <strong>${total.toLocaleString("es-CL")}</strong>
          </div>
          <button className="cart__checkout" disabled={items.length === 0}>
            Comprar
          </button>
        </div>
      </aside>
    </div>
  );
}
