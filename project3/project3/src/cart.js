import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const taxRate = 0.0816;

  const calculateSubtotal = () => {
    return cart.reduce((total, game) => total + parseFloat(game.price.replace('$', '')) * game.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const salesTax = subtotal * taxRate;
  const totalPrice = subtotal + salesTax;

  return (
    <div className="cart">
      <h1 className="cart-title">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cart.map((game) => (
            <li key={game.id} className="cart-item">
              <img src={game.image} alt={game.title} className="cart-image" />
              <div className="cart-details">
                <h2 className="cart-item-title">{game.title}</h2>
                <p className="cart-item-price">
                  {game.price} x {game.quantity} = ${(parseFloat(game.price.replace('$', '')) * game.quantity).toFixed(2)}
                </p>
                <button 
                  onClick={() => removeFromCart(game.id)} 
                  className="remove-btn">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="cart-summary">
          <p className="subtotal-label">
            Subtotal: 
            <span className="subtotal-price">${subtotal.toFixed(2)}</span>
          </p>
          <p className="sales-tax-label">
            NY Sales Tax (8.16%): 
            <span className="sales-tax-price">${salesTax.toFixed(2)}</span>
          </p>
          <p className="total-label">
            Total: 
            <span className="total-price">${totalPrice.toFixed(2)}</span>
          </p>
          <a href="/login" target="_blank" className="checkout-btn">Proceed to Checkout</a>
        </div>
      )}
    </div>
  );
};

export default Cart;
