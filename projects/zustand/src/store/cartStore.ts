import { create } from "zustand";
import type { Product } from "../type";
import { produce } from "immer";

interface CartState {
  user: {
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
      zip: string;
      country: {
        default: string;
        name: string;
      };
    };
  };
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  updateUserCountry: (newCountry: { default: string; name: string }) => void;
}

export const useCartStore = create<CartState>((set) => ({
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "New York",
      zip: "10001",
      country: {
        default: "US",
        name: "United States",
      },
    },
  },
  cart: [] as Product[],
  addToCart: (product: Product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
  updateUserCountry: (newCountry: { default: string; name: string }) =>
    produce((state: CartState) => {
      // Example of using immer for nested state updates
      state.user.address.country.name = newCountry.name;
      state.user.address.country.default = newCountry.default;
    }),
}));
