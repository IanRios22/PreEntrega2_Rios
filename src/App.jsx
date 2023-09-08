import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div className="bg-green-400 h-screen ">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/item/:itemId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart/>}/>
            <Route exact path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
