import React from "react";
import "./Styles.css"

const OrderModal = ({ cart, total, onClose }) => {
  const images = import.meta.glob("../../assets/images/*.jpg", {
  eager: true,
  import: "default",
});
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Order Confirmed ✅</h2>
      <ul>
  {cart.map((item, i) => {
    const filename = item.image?.mobile?.split("/").pop();
    const imageSrc = images[`../../assets/images/${filename}`];

    return (
      <li key={i} className="modal-item">
        <img src={imageSrc} alt={item.name} className="modal-item-img" />
        <div className="modal-item-details">
          <strong>{item.name}</strong>
          <span>{item.qty}× ${item.price.toFixed(2)}</span>
        </div>
        <div className="modal-item-total">
          ${ (item.qty * item.price).toFixed(2) }
        </div>
      </li>
    );
  })}
</ul>

        <p>Total: ${total.toFixed(2)}</p>
        <button onClick={onClose}>Start New Order</button>
      </div>
    </div>
  );
};

export default OrderModal;
