import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const wishList =
  localStorage.getItem("wishList") !== null
    ? JSON.parse(localStorage.getItem("wishList"))
    : [];

const initialState = {
  showMiniCart: false,
  cartItems: cartItems,
  wishList: wishList,
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
      const index = state.wishList.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        //remove if already have been added
        state.wishList = state.wishList.filter((x) => x.id !== newItem.id);
        toast.success("❌ Product successfully removed");
      } else {
        state.wishList.push(newItem);
        toast.success("❤️ Product Added To Wish List");
      }
      localStorage.setItem(
        "wishList",
        JSON.stringify(
          state.wishList.sort((a, b) =>
            a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          )
        )
      );
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
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.cartItems.sort((a, b) =>
            a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          )
        )
      );
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
      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.cartItems.sort((a, b) =>
            a.id > b.id ? 1 : a.id < b.id ? -1 : 0
          )
        )
      );
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
