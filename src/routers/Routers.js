import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import Signup from "../pages/Signup";

const publicRoutes = [
  { path: "home", component: Home },
  { path: "cart", component: Cart },
  { path: "shop", component: Shop },
  { path: "shop/:id", component: ProductDetail },
  { path: "checkout", component: CheckOut },
  { path: "login", component: Login },
  { path: "signup", component: Signup },
];

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
};

export default Routers;
