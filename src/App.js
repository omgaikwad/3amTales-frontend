import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage/CartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import StorePage from "./pages/StorePage/StorePage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
