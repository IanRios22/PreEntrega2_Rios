import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        if (categoryId) {
          response = await getProductsByCategory(categoryId);
          setProducts(response);
        } else {
          response = await getProducts();
        }
        setProducts(response);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="bg-green-400 mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">{greetings}</h1>
      <ItemList key={products.id} products={products} />
    </div>
  );
};

export default ItemListContainer;
