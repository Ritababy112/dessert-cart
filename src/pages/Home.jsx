import React from "react";
import ProductList from "../components/orders/ProductList";
import Cart from "../components/orders/Cart";
import OrderModal from "../components/orders/OrderModal";
import products from "../data/Data.json";
import "../components/orders//Styles.css"

const Home = ({ cart, addToCart, updateQty, removeItem, showModal, confirmOrder, resetOrder, searchTerm }) => {
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="app">
      {/* Show products */}
         <ProductList
  products={products}
  addToCart={addToCart}
  cart={cart}
  updateQty={updateQty}
    searchTerm={searchTerm}
/>

      {/* Show cart */}
      <Cart
        cart={cart}
  
        removeItem={removeItem}
        confirmOrder={confirmOrder}
      />

      {/* Show order modal only after confirming */}
      {showModal && <OrderModal cart={cart} total={total} onClose={resetOrder} />}
    </div>
  );
};

export default Home;
