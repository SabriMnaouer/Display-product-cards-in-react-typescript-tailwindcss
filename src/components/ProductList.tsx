import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";

interface ProductListProps {
  products: Product[];
  onRemove: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onRemove }) => {
  return (
    <div className="flex flex-wrap justify-center max-w-screen-xl mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ProductList;
