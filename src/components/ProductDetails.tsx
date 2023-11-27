import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Fetch product details from the API
    fetch(`https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <div>Price: ${product.price}</div>
      <div>Category: {product.category}</div>
      <div>Description: {product.description}</div>
    </div>
  );
};

export default ProductDetails;
