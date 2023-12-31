import "./App.css";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import NewsPage from "./pages/NewsPage";
import BackLoginPage from "./pages/BackLoginPage";
import BackProductListPage from "./pages/BackProductListPage";
import BackProductNewsPage from "./pages/BackProductNewsPage";
import BackProductOrderPage from "./pages/BackProductOrderPage";
// import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishProvider } from "./context/WishContext";
import { AuthProvider } from "./context/LoginContext";

function App() {
  return (
    <>
      <div id="app" className="text-sm tablet:text-base">
        <AuthProvider>
          <CartProvider>
            <WishProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/ACcafe-vite/" element={<HomePage />} />
                  <Route path="/ACcafe-vite/menu" element={<MenuPage />} />
                  <Route path="/ACcafe-vite/news" element={<NewsPage />} />
                  <Route
                    path="/ACcafe-vite/back-login"
                    element={<BackLoginPage />}
                  />
                  <Route
                    path="/ACcafe-vite/back-products"
                    element={<BackProductListPage />}
                  />
                  <Route
                    path="/ACcafe-vite/back-news"
                    element={<BackProductNewsPage />}
                  />
                  <Route
                    path="/ACcafe-vite/back-orders"
                    element={<BackProductOrderPage />}
                  />
                </Routes>
              </BrowserRouter>
            </WishProvider>
          </CartProvider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
