import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Fetch products from the API
    fetch("https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div>
                <strong>{product.name}</strong>
              </div>
              <div>Price: ${product.price}</div>
              <div>Category: {product.category}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
