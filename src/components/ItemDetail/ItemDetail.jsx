import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className="bg-blue-300 p-3 shadow-md rounded-md m-2 text-center">
      <header className="mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">Categoria: {category}</p>
      </header>
      <picture className="flex justify-center">
        <img src={img} className="w-2/4 h-2/4 rounded-md" alt={name} />
      </picture>
      <section className="my-3">
        <p className="text-gray-600 text-sm">Descripcion: {description}</p>
        <p className="text-lg font-semibold mt-1">Precio: ${price}</p>
      </section>
      <footer>
        <ItemCount
          inicial={1}
          stock={stock}
          onAdd={(cantidad) => console.log("cantidad agregada ", cantidad)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
