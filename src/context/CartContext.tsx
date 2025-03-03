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
  const [cart, setCart] =useState<CartState>({ items: [], totalPrice: 40.20});

  const updateFiberPrice = (price: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      totalPrice: litePlan.basePrice + price, 
    }));
  };
  

  const addProduct = (product: CartItem) => {
    //Actualizar el carrito
    setCart((prevCart) => {
      //Comprobamos si existe el producto
      const existingItem = prevCart.items.find((item) => item.id === product.id);
      //si existe agregamos 1 cantidad
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
        .map((item) => item.id === id ? {...item, quantity: item.quantity -1 } : item )
        .filter((item) => item.quantity > 0);
      return { ...prevCart, items: updateItems};
    });
  };

  const getTotalPrice = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, cart.totalPrice);
  };



  return (
    <CartContext.Provider value={{ cart, updateFiberPrice, getTotalPrice, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
