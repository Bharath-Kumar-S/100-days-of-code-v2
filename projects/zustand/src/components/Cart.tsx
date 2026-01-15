import { useCartStore } from "../store/cartStore";

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};
