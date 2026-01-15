import { ProductListData } from "./ProductListData";
import "./App.css";
import type { Product } from "./type";
import { useState } from "react";
import { Cart } from "./components/Cart";
import { ProductList } from "./components/ProductList";

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <div className="container">
      <ProductList items={ProductListData} cart={cart} setCart={setCart} />
      <Cart items={cart} setCart={setCart} />
    </div>
  );
}

export default App;
