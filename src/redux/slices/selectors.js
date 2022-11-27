import { createSelector } from "@reduxjs/toolkit";

const cartItemSelector = (state) => state.cart.cartItems;
const wishListItemSelector = (state) => state.cart.wishList;

// Count number of products in cart
export const cartItemCountSelector = createSelector(
  cartItemSelector,
  (cartItem) => cartItem.reduce((count, item) => count + item.quantity, 0)
);

//Calculate total of cart
export const cartTotalSelector = createSelector(cartItemSelector, (cartItem) =>
  cartItem.reduce((total, item) => total + item.item.price * item.quantity, 0)
);

// Count number of products in wishList
export const wishListItemCountSelector = createSelector(
  wishListItemSelector,
  (cartItem) => cartItem.reduce((count, item) => count + item.quantity, 0)
);
