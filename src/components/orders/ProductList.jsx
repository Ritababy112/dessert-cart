import React from "react";
import ProductCard from "./Product";
import "./Styles.css";

const ProductList = ({ products, addToCart, cart, updateQty, searchTerm }) => {
  const getQty = (name) => cart.find((item) => item.name === name)?.qty || 0;
const filteredProducts = products.filter(product =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.category.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div className="product-grid">
      <h2>Desserts</h2>
      <div className="grid">
      {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            qty={getQty(product.name)}
            onAdd={() => addToCart(product)}
            updateQty={updateQty}
          />
        ))}
        {filteredProducts.length === 0 && (
          <p>No desserts match your search.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
