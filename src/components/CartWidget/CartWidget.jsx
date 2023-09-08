import { Link, useState } from "react";
import cart from "../../assets/cartxd.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";

const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);
  const [mostrarCarrito, setMostrarCarrito] = useState(false); // Cambiar aquí

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleCarrito}
        className="flex items-center space-x-2 bg-slate-300 p-2 rounded-xl cursor-pointer hover:bg-blue-400"
      >
        <img src={cart} alt="cart-widget" className="h-6 w-6 flex-shrink-0" />
        <span className="text-bold-24 text-white bg-blue-500 rounded-full p-1">
          {totalCantidad}
        </span>
      </button>

      {mostrarCarrito && (
        <div className="absolute right-0 top-16 bg-white p-4 rounded-lg shadow-lg w-80 h-96 overflow-y-auto">
          <Cart />
        </div>
      )}

    </div>
  );
};

export default CartWidget;
