import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NewsPage from "./pages/NewsPage";
// import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <div id="app" className="text-sm tablet:text-base">
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="*" element={<HomePage />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="news" element={<NewsPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
