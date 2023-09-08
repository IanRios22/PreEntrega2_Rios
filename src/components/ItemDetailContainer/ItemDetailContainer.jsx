import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null); // Inicializamos con null en lugar de un array vacío
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  const docRef = doc(db, "products", itemId);

  useEffect(() => {
    const getProduct = () => {
      try {
        setLoading(true);
        getDoc(docRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              // Cambiamos la condición aquí
              const data = docSnapshot.data();
              console.log("Producto recuperado:", data);
              setProduct({ id: docSnapshot.id, ...data });
            } else {
              console.log("El producto no existe");
              setProduct(null); // Establecemos el producto en null en caso de que no exista
            }
          })
          .catch((error) => {
            console.error("Error al obtener el producto:", error);
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    getProduct();
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : product ? (
        <ItemDetail {...product} />
      ) : (
        <p>El producto no existe</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
