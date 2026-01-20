import type { Product } from "../type";
import { useCartStore } from "../store/cartStore";

interface ProductListProps {
  items: Product[];
}

export const ProductList = ({ items }: ProductListProps) => {
  const { cart, addToCart } = useCartStore();

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
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
