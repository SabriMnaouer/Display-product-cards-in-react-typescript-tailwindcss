import React from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onRemove: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onRemove }) => {
  return (
    <div className="border rounded-xl bg-gradient-to-r from-teal-400 to-green-500 w-full p-4 m-4 md:w-1/2 lg:w-1/3 xl:w-1/4 transition-transform transform hover:scale-105 hover:bg-green-600">
      <strong className="text-lg block mb-2">{product.title}</strong>
      <p className="mb-2">Category: {product.category}</p>
      <p className="mb-2 text-blue-600 font-medium">Likes: {product.likes}</p>
      <p className="mb-4 text-red-600 font-medium">
        Dislikes: {product.dislikes}
      </p>
      <button
        onClick={() => onRemove(product.id)}
        className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600 transition">
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
