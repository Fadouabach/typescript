import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './BookCard.css';

export default function BookCard({ book }) {
    const { addToCart } = useCart();

    return (
        <div className="book-card">
            <div className="book-image-container">
                <img src={book.image} alt={book.title} className="book-image" />
                <div className="book-overlay">
                    <button
                        className="quick-add-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart(book);
                        }}
                    >
                        <Plus size={20} /> Add
                    </button>
                </div>
            </div>
            <Link to={`/book/${book.id}`} className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <div className="book-footer">
                    <span className="book-price">${book.price.toFixed(2)}</span>
                    <span className="book-rating">★ {book.rating}</span>
                </div>
            </Link>
        </div>
    );
}
