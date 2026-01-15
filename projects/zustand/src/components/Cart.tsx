import type { Product } from "../type";

interface CartProps {
  items: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const Cart = ({ items, setCart }: CartProps) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              onClick={() =>
                setCart((prevCart) => prevCart.filter((i) => i.id !== item.id))
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
