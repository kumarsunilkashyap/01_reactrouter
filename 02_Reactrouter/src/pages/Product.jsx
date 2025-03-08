import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Fetch all products
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="mx-auto w-full max-w-7xl bg-gray-100">
      <div className="grid grid-cols-1 gap-6 p-10 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              className="h-48 w-full object-cover"
              src={product.image}
              alt={product.title}
            />
            <div className="p-6">
              <h1 className="block mt-1 text-xl leading-tight font-semibold text-gray-900">
                {product.title}
              </h1>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-2 text-gray-900 font-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
