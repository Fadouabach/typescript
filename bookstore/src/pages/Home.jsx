import { books } from '../utils/dummyData';
import BookCard from '../components/BookCard';
import './Home.css';

export default function Home() {
    const featuredBooks = books.filter(b => b.isFeatured);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1 className="hero-title animate-fade-in">
                        Discover Your Next <br />
                        <span className="text-gradient">Unknown Adventure</span>
                    </h1>
                    <p className="hero-description animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        Curated collection of the finest literature for the modern reader.
                    </p>
                </div>
                <div className="hero-glow"></div>
            </section>

            {/* Featured Section */}
            <section className="container section-t-space">
                <div className="flex-between" style={{ marginBottom: '2rem' }}>
                    <h2 className="section-title">Trending Now</h2>
                </div>
                <div className="grid-books">
                    {featuredBooks.map((book, i) => (
                        <div key={book.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            </section>

            {/* All Books Section */}
            <section className="container section-t-space section-b-space">
                <h2 className="section-title">All Collection</h2>
                <div className="grid-books">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </section>
        </div>
    );
}
