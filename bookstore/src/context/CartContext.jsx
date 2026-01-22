import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const addToCart = (book) => {
        setItems(prev => {
            const existing = prev.find(item => item.id === book.id);
            if (existing) {
                return prev.map(item =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...book, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const toggleCart = () => setIsOpen(prev => !prev);
    const closeCart = () => setIsOpen(false);
    const openCart = () => setIsOpen(true);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            totalItems,
            totalPrice,
            isOpen,
            toggleCart,
            closeCart,
            openCart
        }}>
            {children}
        </CartContext.Provider>
    );
}
