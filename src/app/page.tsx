"use client";

import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { Product } from "../types";
const productsData: Product[] = [
  {
    id: 1,
    title: "Product 1",
    category: "Electronics",
    likes: 10,
    dislikes: 2,
  },
  {
    id: 2,
    title: "Product 2",
    category: "Clothing",
    likes: 15,
    dislikes: 5,
  },
  {
    id: 3,
    title: "Product 3",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 4,
    title: "Product 4",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 5,
    title: "Product 5",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 6,
    title: "Product 6",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 6,
    title: "Product 6",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 7,
    title: "Product 6",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 8,
    title: "Product 8",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 9,
    title: "Product 9",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 10,
    title: "Product 10",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 11,
    title: "Product 11",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
  {
    id: 12,
    title: "Product 12",
    category: "Books",
    likes: 20,
    dislikes: 3,
  },
];
const Home: React.FC = () => {
  const [products, setProducts] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPageOptions = [4, 8, 12];
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products
    .filter(
      (product) => !selectedCategory || product.category === selectedCategory
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  const handleRemove = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-4">Product List</h1>
        <div className="flex justify-center my-4">
          <label className="mr-2">Show items per page:</label>
          <select
            className="p-2 border rounded"
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}>
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center my-4">
          <button
            className={`p-2 mx-2 rounded ${
              !selectedCategory
                ? "bg-purple-700 text-white"
                : "bg-white text-purple-700"
            }`}
            onClick={() => handleCategoryFilter(null)}>
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`p-2 mx-2 rounded ${
                selectedCategory === category
                  ? "bg-purple-700 text-white"
                  : "bg-white text-purple-700"
              }`}
              onClick={() => handleCategoryFilter(category)}>
              {category}
            </button>
          ))}
        </div>
        <ProductList products={currentItems} onRemove={handleRemove} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
