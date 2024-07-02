import { createSlice } from "@reduxjs/toolkit";
import { userRequest } from "../requestMethods";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [], // Array to store products in the cart
    quantity: 0, // Total quantity of items in the cart
    total: 0, // Total price of items in the cart
  },
  reducers: {
    addProduct: (state, action) => {
      const { product, quantity, size, color } = action.payload;

      if (!product || !product.price || !size || !color) {
        console.error("Product, price, size, or color is undefined");
        return;
      }

      const existingProductIndex = state.products.findIndex(
        (p) => p._id === product._id && p.size === size && p.color === color
      );

      if (existingProductIndex !== -1) {
        // Product already exists in the cart, update quantity and total
        state.products[existingProductIndex].quantity += quantity;
      } else {
        // Add new product to the cart
        state.products.push({ ...product, quantity, size, color });
      }

      // Update total quantity and total price
      state.quantity += quantity;
      state.total += product.price * quantity;
    },
    removeProduct: (state, action) => {
      const { productId, size, color } = action.payload;

      const existingProductIndex = state.products.findIndex(
        (p) => p._id === productId
      );

      if (existingProductIndex !== -1) {
        // Decrease quantity and update total price
        const removedProduct = state.products[existingProductIndex];
        state.quantity -= removedProduct.quantity;
        state.total -= removedProduct.price * removedProduct.quantity;

        // Remove product from the cart
        state.products.splice(existingProductIndex, 1);
      }
    },
    updateProductQuantity: (state, action) => {
      const { productId, size, color, newQuantity } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (p) => p._id === productId
      );

      if (existingProductIndex !== -1) {
        // Update quantity and total price based on new quantity
        const existingProduct = state.products[existingProductIndex];
        const difference = newQuantity - existingProduct.quantity;
        state.quantity += difference;
        state.total += difference * existingProduct.price;
        existingProduct.quantity = newQuantity;
      }
    },
    setCart: (state, action) => {
      state.products = action.payload.products;
      state.quantity = action.payload.quantity;
      state.total = action.payload.total;
    },
    clearCart: (state) => {
      // Clear all products from the cart
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {
  setCart,
  addProduct,
  removeProduct,
  updateProductQuantity,
  clearCart,
} = cartSlice.actions;
export const fetchCart = (userId) => async (dispatch) => {
  try {
    const res = await userRequest.get(`/carts/find/${userId}`);
    dispatch(setCart(res.data));
  } catch (err) {
    console.error("Failed to fetch cart:", err);
  }
};

export const saveCart = (userId, cart) => async () => {
  try {
    await userRequest.post("/carts/", { userId, ...cart });
  } catch (err) {
    console.error("Failed to save cart:", err);
  }
};
export default cartSlice.reducer;
