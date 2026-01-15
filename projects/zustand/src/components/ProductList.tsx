import React from "react";
import type { Product } from "../type";

interface ProductListProps {
  items: Product[];
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductList = ({ items, cart, setCart }: ProductListProps) => {
  const filteredItems = items.filter(
    (item) => !cart.find((cartItem) => cartItem.id === item.id),
  );

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => setCart((prevCart) => [...prevCart, item])}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
