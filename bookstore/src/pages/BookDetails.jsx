import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import { books } from '../utils/dummyData';
import { useCart } from '../context/CartContext';
import './BookDetails.css';

export default function BookDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const book = books.find(b => b.id === Number(id));

    if (!book) return <div className="container inner-page">Book not found</div>;

    const handleAddToCart = () => {
        addToCart(book);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="book-details-page">
            <div className="container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} /> Back
                </button>

                <div className="details-grid">
                    <div className="details-image-col">
                        <div className="details-image-wrapper glass">
                            <img src={book.image} alt={book.title} />
                        </div>
                    </div>

                    <div className="details-content-col animate-fade-in">
                        <div className="details-header">
                            <span className="details-category">{book.category}</span>
                            <h1 className="details-title">{book.title}</h1>
                            <p className="details-author">by {book.author}</p>
                        </div>

                        <div className="details-rating">
                            <Star fill="#fbbf24" stroke="#fbbf24" size={20} />
                            <span className="rating-value">{book.rating}</span>
                        </div>

                        <div className="details-price-block">
                            <span className="details-price">${book.price.toFixed(2)}</span>
                        </div>

                        <p className="details-synopsis">{book.synopsis}</p>

                        <button
                            className={`btn btn-primary add-cart-large-btn ${added ? 'success' : ''}`}
                            onClick={handleAddToCart}
                        >
                            {added ? (
                                <>
                                    <Check size={20} /> Added to Cart
                                </>
                            ) : (
                                <>
                                    <ShoppingBag size={20} /> Add to Cart
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
