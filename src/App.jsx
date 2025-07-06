import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/root";
import Home from "./pages/Home";
import Review from "./components/orders/Review"
import Contact from "./components/orders/Contact"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // ✅ Define cart state before using it
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // ✅ Cart logic
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.name === product.name);
      if (exists) {
        return prev.map(item =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };
const updateQty = (name, change) => {
  setCart(prev =>
    prev.map(item =>
      item.name === name
        ? { ...item, qty: Math.max(1, item.qty + change) }
        : item
    )
  );
};

  

  const removeItem = (name) => {
    setCart(prev => prev.filter(item => item.name !== name));
  };

  const resetOrder = () => {
    setCart([]);
    setShowModal(false);
  };

  const confirmOrder = () => {
    setShowModal(true);
  };

  // ✅ Now return your routes
  return (
    <Routes>
      <Route path="/" element={<MainLayout setSearchTerm={setSearchTerm} />}>
        <Route
          index
          element={
            <Home
              cart={cart}
              addToCart={addToCart}
              updateQty={updateQty}
              removeItem={removeItem}
              showModal={showModal}
              confirmOrder={confirmOrder}
              resetOrder={resetOrder}
              searchTerm={searchTerm}
            />
          }
        />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
