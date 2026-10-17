'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, SHOP, SITE } from '@/config/site';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, selectedOption?: string) => void;
  removeItem: (slug: string, selectedOption?: string) => void;
  updateQuantity: (slug: string, quantity: number, selectedOption?: string) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  shipping: number;
  cryptoDiscount: number;
  isCryptoSelected: boolean;
  setIsCryptoSelected: (val: boolean) => void;
  total: number;
  freeShippingRemaining: number;
  isMinOrderMet: boolean;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem(SITE.cartKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Ignore storage errors
    }
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isCryptoSelected, setIsCryptoSelected] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(SITE.cartKey, JSON.stringify(items));
    } catch {
      // Ignore storage errors
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1, selectedOption?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.product.slug === product.slug && i.selectedOption === selectedOption
      );
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      }
      return [...prev, { product, quantity, selectedOption }];
    });
    setIsOpen(true);
  };

  const removeItem = (slug: string, selectedOption?: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.slug === slug && i.selectedOption === selectedOption))
    );
  };

  const updateQuantity = (slug: string, quantity: number, selectedOption?: string) => {
    if (quantity <= 0) {
      removeItem(slug, selectedOption);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.slug === slug && i.selectedOption === selectedOption
          ? { ...i, quantity }
          : i
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const shipping = subtotal >= SHOP.freeShippingThreshold ? 0 : SHOP.shippingFee;
  const cryptoDiscount = isCryptoSelected ? Math.round(subtotal * (SHOP.cryptoDiscount / 100)) : 0;
  const total = Math.max(0, subtotal + shipping - cryptoDiscount);
  const freeShippingRemaining = Math.max(0, SHOP.freeShippingThreshold - subtotal);
  const isMinOrderMet = subtotal >= SHOP.minOrder;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        shipping,
        cryptoDiscount,
        isCryptoSelected,
        setIsCryptoSelected,
        total,
        freeShippingRemaining,
        isMinOrderMet,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
