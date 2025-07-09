import React from "react";
import "./Styles.css";
import CartImage from '../../assets/images/illustration-empty-cart.svg'




const Cart = ({ cart,  removeItem, confirmOrder }) => {


  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <aside className="cart">
      <h3>Your Cart ({cart.length})</h3>
      {cart.length === 0 ? (
      <div style={{display: "grid", placeItems: "center"}}>
        <img src={CartImage} alt="" />
          <p>Your cart is empty</p>
      </div>
      ) : (
        <>
        <ul>
  {cart.map((item, index) => (
    <li key={index} className="cart-item">
      <div className="item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-breakdown">
          <span className="nann">{item.qty}×</span> ${item.price.toFixed(2)}
          <span className="item-total">${(item.qty * item.price).toFixed(2)}</span>
        </span>
        
      </div>
      <div className="item-actions">
        
        <button className="rem" onClick={() => removeItem(item.name)}>✖</button>
      </div>
    </li>
  ))}
</ul>

          <p>Total: ${total.toFixed(2)}</p>
          <button className="com" onClick={confirmOrder}>Confirm Order</button>
        </>
      )}
    </aside>
  );
};

export default Cart;
