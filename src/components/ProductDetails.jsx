import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';
import CartDrawer from './ProductCardDrawer';

const ProductDetail = ({ products, onAddToCart, isProductInCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const foundProduct = products.find(item => item.id.toString() === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.imageSrc);
    }
  }, [id, products]);

  if (!product) {
    return <p>Product not found or loading...</p>;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log('Adding to cart:', product); // Debugging line
    onAddToCart(product, quantity);
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    setCartOpen(true); // Open cart when item is added
  };

  const productInCart = isProductInCart(product.id);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const updateQuantity = (itemId, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  return (
    <div className="container mx-auto mt-6 p-4">
      <button className="text-gray-600 mb-4" onClick={() => navigate('/shop')}>← Back</button>

      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 items-start">
          {Object.entries(product.sampleImages).map(([key, img], idx) => (
            <img
              key={key}
              src={img}
              alt={`Sample ${idx + 1}`}
              className={`w-24 h-24 border rounded cursor-pointer ${selectedImage === img ? 'border-purple-600' : 'border-gray-300'}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <div className="flex-1 mx-4">
          <img src={selectedImage} alt="Selected Product" className="w-full h-auto object-cover rounded" />
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <div className="text-yellow-400">{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</div>
            <p className="text-sm text-gray-600">{product.rating} reviews</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
            <span className="text-green-600 font-bold text-xl">₹{product.price}</span>
          </div>

          <p className="text-gray-700 mt-4">{product.description}</p>

          <div className="mt-4">
            <p className="font-semibold mb-2">Share item:</p>
            <div className="flex space-x-2">
              <a href="/facebook.com" className="bg-gray-200 p-2 rounded-full"><FaFacebookF className="text-gray-600" /></a>
              <a href="/twitter.com" className="bg-gray-200 p-2 rounded-full"><FaTwitter className="text-gray-600" /></a>
              <a href="/pintrest.com" className="bg-gray-200 p-2 rounded-full"><FaPinterestP className="text-gray-600" /></a>
              <a href="/instagram.com" className="bg-gray-200 p-2 rounded-full"><FaInstagram className="text-gray-600" /></a>
            </div>
          </div>

          <div className="mt-6 flex items-center space-x-4">
            <div className="flex items-center border rounded-full">
              <button className="p-2 px-4" onClick={decreaseQuantity}>-</button>
              <input type="text" className="w-12 text-center focus:outline-none" value={quantity} readOnly />
              <button className="p-2 px-4" onClick={increaseQuantity}>+</button>
            </div>

            {productInCart ? (
              <button
                onClick={toggleCart} // Open the cart modal
                className="bg-blue-600 text-white px-6 py-2 rounded-full"
              >
                View Cart
              </button>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-green-600 text-white px-6 py-2 rounded-full"
              >
                Add to Cart
              </button>
            )}
          </div>

          <div className="mt-6 text-sm">
            <p>Category: <span className="font-semibold">{product.category}</span></p>
            <p>Tags: <span className="font-semibold">{product.tags}</span></p>
          </div>
        </div>
      </div>

      {/* Render the CartDrawer modal */}
      <CartDrawer 
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default ProductDetail;
