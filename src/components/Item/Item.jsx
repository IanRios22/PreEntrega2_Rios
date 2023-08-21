import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="flex justify-center items-center bg-green-400">
      <article className="bg-orange-300 p-4 shadow-md rounded-lg w-full sm:w-64 m-4 text-center">
        <header className="mb-4">
          <h2 className="text-xl font-semibold">{name}</h2>
        </header>
        <picture>
          <img src={img} className="w-full h-auto rounded-lg" />
        </picture>
        <section className="mt-4">
          <p className="text-gray-600">Precio: ${price}</p>
          <p className="text-gray-600">Stock Disponible: {stock}</p>
        </section>
        <footer className="mt-6">
          <Link
            to={`/item/${id}`}
            className="inline-block bg-sky-500 px-4 py-2 rounded-lg text-white hover:bg-red-400"
          >
            Ver Detalles
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default Item;
