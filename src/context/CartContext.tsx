import { createContext, useContext, useState } from 'react';

import litePlan from '../services/data/estandar.json';
import { CartContextType, CartItem, CartState } from '../services/data/types';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialItems: CartItem[] = [
    { id: 'linea-fija', name: 'Línea fija incluida', price: 0, quantity: 1 },
    { id: 'fibra', name: 'Fibra incluida', price: litePlan.basePrice, quantity: 1 },
    { id: 'centralita', name: 'Centralita incluida', price: 0, quantity: 1 },
  ];

  const [cart, setCart] = useState<CartState>({
    items: initialItems,
    totalPrice: litePlan.basePrice, // La fibra ya está incluida
  });

  const [fiberPrice, setFiberPrice] = useState(0);

  const updateFiberPrice = (price: number) => {
    setFiberPrice(price);
    setCart((prevCart) => ({
      ...prevCart,
      totalPrice:
        litePlan.basePrice +
        price +
        prevCart.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }));
  };

  const addProduct = (product: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((item) => item.id === product.id);
      const updatedItems = existingItem
        ? prevCart.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
        : [...prevCart.items, { ...product, quantity: 1 }];
      return { ...prevCart, items: updatedItems };
    });
  };

  const removeProduct = (id: string) => {
    setCart((prevCart) => {
      const updateItems = prevCart.items
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0);
      return { ...prevCart, items: updateItems };
    });
  };

  const getTotalPrice = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, cart.totalPrice);
  };

  const getSelectedProducts = () => {
    return cart.items.filter((item) => item.quantity > 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, fiberPrice, updateFiberPrice, getTotalPrice, addProduct, removeProduct, getSelectedProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};
