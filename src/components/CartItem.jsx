import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h1>Shopping Cart</h1>
          <p>Your cart is empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.map((item) => {
          const itemTotal =
            item.price * item.quantity;

          return (
            <div
              className="cart-item"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h2>{item.name}</h2>

                <p>
                  Unit Price: $
                  {item.price.toFixed(2)}
                </p>

                <p>
                  Item Total: $
                  {itemTotal.toFixed(2)}
                </p>
              </div>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    handleDecrease(item)
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    handleIncrease(item)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  handleRemove(item.id)
                }
              >
                Delete
              </button>
            </div>
          );
        })}

        <div className="cart-summary">
          <h2>
            Total Amount: $
            {totalAmount.toFixed(2)}
          </h2>

          <button
            onClick={() =>
              window.location.reload()
            }
          >
            Continue Shopping
          </button>

          <button
            onClick={() =>
              alert(
                "Checkout functionality coming soon!"
              )
            }
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
