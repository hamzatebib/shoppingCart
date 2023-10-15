import React, { useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import data from "./data.json";
import Products from "./components/Products/products";
function App() {
  const [products, setProducts] = useState(data);
  console.log(data);
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <div className="filter-wrapper">filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
