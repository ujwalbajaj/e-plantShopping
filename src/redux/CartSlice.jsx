const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    addItem: (state, action) => {
      // Add product to cart
    },

    removeItem: (state, action) => {
      // Remove product from cart
    },

    updateQuantity: (state, action) => {
      // Update product quantity
    }
  }
});
