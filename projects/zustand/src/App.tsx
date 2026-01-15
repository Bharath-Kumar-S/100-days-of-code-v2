import { ProductListData } from "./ProductListData";
import "./App.css";
import { Cart } from "./components/Cart";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <div className="container">
      <ProductList items={ProductListData} />
      <Cart />
    </div>
  );
}

export default App;
