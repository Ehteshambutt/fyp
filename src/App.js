import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SignUp from "./components/SignUp";
// import { About } from './components/About'
import { Navbar } from "./components/Navbar/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NewProducts } from "./components/NewProducts";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Products } from "./components/Products/Products";
import { NoMatch } from "./components/NoMatch";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import Admin from './components/Admin/Admin'
import Orders from './components/Admin/Orders'
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login";
import { Service } from "./components/Services/Service";
import ServiceForm from './components/Services/ServiceForm'
import {
  ServiceDetails,
  serviceDetails,
} from "./components/Services/serviceDetails";
import { RequireAuth } from "./components/RequireAuth";
import Contact from "./components/Contact/Contact";
import Forgotpassword from "./components/Forgotpassword";
import ResetPassword from "./components/ResetPassword";
import Emailsent from "./components/Emailsent";
import { ProductDetail } from "./components/Products/ProductDetail";
import Proceed from "./components/Proceed/Proceed";
import {ContactUs} from "./components/ContactUs";

const LazyAbout = React.lazy(() => import("./components/About/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/forgottenpassword" element={<Forgotpassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<ContactUs />} />
        <Route path="/proceed" element={<Proceed />} />
        <Route path="/serviceForm" element={<ServiceForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/admin" element={<Admin/>} ></Route>
        <Route
          path="/service"
          element={
            //  <RequireAuth>
            <Service />
            // </RequireAuth>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense fallback="Loading...">
              <Contact />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route
          path="product"
          element={
            //<RequireAuth>
            <Products />
            //</RequireAuth>
          }
        >
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          {/* <Route path="admin" element={<Admin />} /> */}
        </Route>
        <Route
          exact
          path="/reset-password/:userId/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/emailsent" element={<Emailsent />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
