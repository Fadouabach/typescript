import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app-layout">
          <Header />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book/:id" element={<BookDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
