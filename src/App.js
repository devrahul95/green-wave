import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetails';
import products from './data/productData';
import MainSection from './components/MainSection';
import CartDrawer from './components/ProductCardDrawer';
import ProductPage from './components/ProductPage';
import AccountSettings from './components/MyAccount';



// Dummy Components for Other Routes
const About = () => <div>About Us Page</div>;
const Card = () => <div>Dummy card</div>;
const Offers = () => <div>Offers Page</div>;

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ProductList products={products} />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={< Card/>} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/my-account" element={<AccountSettings />} />

          <Route 
            path="/product/:id" 
            element={<ProductDetail />} 
          />
        </Routes>
      </div>
    </Router>
  );
}
