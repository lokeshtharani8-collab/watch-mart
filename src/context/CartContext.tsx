import React, { createContext, useContext, useState, useEffect } from 'react';
import { WatchProduct, CartItem } from '../types/watch';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: WatchProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  toast: string | null;
  showToast: (message: string) => void;
}

const CART_STORAGE_KEY = 'the_watch_mart_cart_v1';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (err) {
      console.warn('Failed to load cart from localStorage:', err);
    }
    return [];
  });

  const [toast, setToast] = useState<string | null>(null);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.warn('Failed to save cart to localStorage:', err);
    }
  }, [cart]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const addToCart = (product: WatchProduct, quantity = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
    showToast(`Added "${product.name.slice(0, 30)}..." to your cart`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const removed = prevCart.find(item => item.product.id === productId);
      if (removed) {
        showToast(`Removed "${removed.product.name.slice(0, 24)}..." from cart`);
      }
      return prevCart.filter(item => item.product.id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    try {
      localStorage.removeItem(CART_STORAGE_KEY);
    } catch (err) {
      console.warn('Failed to clear cart in localStorage:', err);
    }
  };

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  // Free delivery for orders above ₹999
  const deliveryFee = subtotal > 999 || subtotal === 0 ? 0 : 99;
  // GST calculation (5% included in subtotal or calculated breakdown)
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        deliveryFee,
        tax,
        total,
        toast,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
