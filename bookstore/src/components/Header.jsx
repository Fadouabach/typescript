import { Link } from 'react-router-dom';
import { ShoppingBag, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Header.css';

export default function Header() {
    const { totalItems, toggleCart } = useCart();

    return (
        <header className="header glass">
            <div className="container flex-between header-content">
                <Link to="/" className="logo">
                    <span className="logo-accent">Nebula</span>Books
                </Link>

                <div className="search-bar">
                    <Search size={18} className="search-icon" />
                    <input type="text" placeholder="Search for books..." />
                </div>

                <nav>
                    <ul className="flex-center nav-links">
                        <li>
                            <div className="cart-icon-wrapper" onClick={toggleCart}>
                                <ShoppingBag size={24} />
                                {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
