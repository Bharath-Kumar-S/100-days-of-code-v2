import { ProductListData } from "./ProductListData";
import "./App.css";
import { Cart } from "./components/Cart";
import { ProductList } from "./components/ProductList";
import { ImmerDemo } from "./components/ImmerDemo";

function App() {
  return (
    <div className="container">
      <ProductList items={ProductListData} />
      <Cart />
      <ImmerDemo />
    </div>
  );
}

export default App;
