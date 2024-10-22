import React, { useState } from 'react';
import CartDrawer from './ProductCardDrawer';
import ProductDetail from './ProductDetails';
import productsData from '../data/productData';

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product, quantity) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const updateQuantity = (productId, quantityChange) => {
    setCartItems(cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + quantityChange } : item
    ).filter(item => item.quantity > 0)); 
  };

  return (
    <div>
      <ProductDetail 
        products={productsData} 
        onAddToCart={handleAddToCart} 
        isProductInCart={isProductInCart} 
        onViewCart={() => setIsCartOpen(true)}
      />
      <CartDrawer 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
        cartItems={cartItems} 
        updateQuantity={updateQuantity} 
      />
    </div>
  );
};

export default ProductPage;
