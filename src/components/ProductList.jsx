import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    category: "Medicinal Plants",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c5b5e3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Lavender",
    price: 18,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 22,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 25,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Jasmine",
    price: 20,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Tulsi",
    price: 12,
    category: "Medicinal Plants",
    image: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: "Spider Plant",
    price: 17,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Rosemary",
    price: 16,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1598514982901-ae627f4b1b1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Neem",
    price: 14,
    category: "Medicinal Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isInCart = (productId) => {
    return cartItems.some(
      (item) => item.id === productId
    );
  };

  const categories = [
    "Aromatic Plants",
    "Medicinal Plants",
    "Air Purifying Plants",
  ];

  return (
    <div className="page-container">
      <div className="product-list">
        <h1>Paradise Nursery Plants</h1>

        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category
          );

          return (
            <section
              className="category-section"
              key={category}
            >
              <h2>{category}</h2>

              <div className="products-grid">
                {categoryProducts.map((product) => (
                  <article
                    className="plant-card"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <h3>{product.name}</h3>

                    <p>
                      Category: {product.category}
                    </p>

                    <p className="price">
                      ${product.price.toFixed(2)}
                    </p>

                    <button
                      className="add-cart-btn"
                      onClick={() =>
                        handleAddToCart(product)
                      }
                      disabled={isInCart(product.id)}
                    >
                      {isInCart(product.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
