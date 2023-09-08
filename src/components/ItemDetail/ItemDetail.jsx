import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [cantidaAgregada, setCantidadAgregada] = useState(0);

  const { agregarItem } = useContext(CartContext);

  const handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad);

    const item = {
      id,
      name,
      price,
    };
    console.log(item)

    agregarItem(item, cantidad);
  };

  return (
    <div className="bg-green-500">
      <div>
        <article className="bg-blue-300 p-2 shadow-md rounded-md m-2 text-center">
          <header className="mb-2">
            {id}
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-500 text-sm">Categoria: {category}</p>
          </header>
          <picture className="flex justify-center">
            <img src={img} className="w-1/4 h-1/4 rounded-md" alt={name} />
          </picture>
          <section className="my-2">
            <p className="text-gray-600 text-sm">Descripcion: {description}</p>
            <p className="text-lg font-semibold mt-1">Precio: ${price}</p>
          </section>
          <footer>
            {cantidaAgregada > 0 ? (
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                <Link to="/">Terminar Compra</Link>
              </button>
            ) : (
              <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
            )}
          </footer>
        </article>
      </div>
    </div>
  );
};

export default ItemDetail;
