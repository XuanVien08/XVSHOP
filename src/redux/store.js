import cartReducer from "./slices/cartSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
