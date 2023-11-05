import React, { useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import data from "./data.json";
import Products from "./components/Products/products";
import Filter from "./components/filter/filter";
import Cart from "./components/cart/cart";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const [products, setProducts] = useState(data);
  const [sise, setSise] = useState("");
  const [sort, setSort] = useState("");

  const [cartItems, setCartitems] = useState(
    //use the cartItemsstotred in localstorage
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    //store cartItems in localstorage we dont lose it when refrech
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleFilterBySise = (e) => {
    setSise(e.target.value);
    console.log(e.target.value);
    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      let productClone = [...products];

      let newProducts = productClone.filter(
        (p) => p.sizes.indexOf(e.target.value) != -1
      );
      setProducts(newProducts);
    }
  };

  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productClone = [...products];
    let newProducts = productClone.sort(function (a, b) {
      if (order == "highest") {
        return a.price - b.price; //its mean if a-b <0 => a then b
      } else if ((order = "lower")) {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1; //if a<b => a then b else inverse
      }
    });
    setProducts(newProducts);
  };
  const handleInputNameChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("name =" + searchTerm);
  };

  const searchByName = (searchTerm) => {
    let name = searchTerm;
    let productClone = [...products];
    let newProducts = productClone.filter((p) =>
      p.title.toLowerCase().includes(name.toLowerCase())
    );
    setProducts(newProducts);

    console.log("my ptoducts=" + JSON.stringify(products) + "name=" + name);
  };

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    var isProductExist = false;
    console.log("lenth" + cartItems.length);
    cartItemsClone.forEach((p) => {
      if (p.id == product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartitems(cartItemsClone);
  };
  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartitems(cartItemsClone.filter((p) => p.id != product.id));
  };
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} addToCart={addToCart} />
            <Filter
              productsNumber={products.length}
              handleFilterBySise={handleFilterBySise}
              sise={sise}
              handleFilterByOrder={handleFilterByOrder}
              sort={sort}
              searchByName={searchByName}
              handleInputNameChange={handleInputNameChange}
              searchTerm={searchTerm}
            />
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
