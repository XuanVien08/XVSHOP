import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  showMiniCart: false,
  cartItems: [],
  wishListItems: [],
  // totalAmount: 0,
  // totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    addWishList(state, action) {
      //newItem = {id, product , quantity}
      const newItem = action.payload;
      const index = state.wishListItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        //remove if already have been added
        state.wishListItems = state.wishListItems.filter(
          (x) => x.id !== newItem.id
        );
        toast.success("❌ Product Remove To Wish List");
      } else {
        state.wishListItems.push(newItem);
        toast.success("❤️ Product Added To Wish List");
      }
    },

    addToCart(state, action) {
      //newItem = {id, product , quantity}
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
    },

    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      //check if product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

export const {} = cartSlice.actions;

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addWishList,
  addToCart,
  setQuantity,
  removeFromCart,
} = actions;
export default reducer;
