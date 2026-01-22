import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

export default function CartDrawer() {
    const { isOpen, closeCart, items, removeFromCart, totalPrice } = useCart();

    if (!isOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={closeCart}></div>
            <div className="cart-drawer glass">
                <div className="cart-header">
                    <h2>Your Cart ({items.length})</h2>
                    <button className="close-btn" onClick={closeCart}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {items.length === 0 ? (
                        <div className="empty-cart">
                            <ShoppingBag size={48} className="empty-icon" />
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-img" />
                                <div className="cart-item-info">
                                    <h4>{item.title}</h4>
                                    <p className="cart-item-price">${item.price.toFixed(2)} x {item.quantity}</p>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="flex-between mb-4">
                        <span>Subtotal</span>
                        <span className="total-price">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="btn btn-primary btn-block">
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}
