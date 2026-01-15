import { create } from "zustand";
import type { Product } from "../type";

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [] as Product[],
  addToCart: (product: Product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
}));
