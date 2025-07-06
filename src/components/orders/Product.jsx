import React from "react";
import "./Styles.css"

// Grab all .jpg files in assets/images
const images = import.meta.glob("../../assets/images/*.jpg", {
  eager: true,
  import: "default",
});

const Product = ({ product, onAdd, qty,  updateQty }) => {
  const filename = product.image.mobile.split("/").pop();
  const imageSrc = images[`../../assets/images/${filename}`];

  return (
    <div className="product-card">
      <img src={imageSrc} alt={product.name} className="product-img" />
      
      {qty === 0 ? (
        <button className="add-btn" onClick={onAdd}>
          🛒 Add to Cart
        </button>
      ) : (
       <div className="qty-controls">
          <button className="qty-btn" onClick={() => updateQty(product.name, -1)}>-</button>
          {qty}
          <button className="qty-btn" onClick={() => updateQty(product.name, 1)}>+</button>
        </div>
      )}
      <div className="cnp">
        <p className="category">{product.category}</p>
      <h3 className="name">{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      </div>
      

    </div>
  );
};

export default Product;
