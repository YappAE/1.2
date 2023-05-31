import React from "react";
import Product from "./For12Task/Product";
import { useState } from 'react';

function Home12() {

  const product = [
    {
      name: "Продукт 6",
      description:
        "Мандарин - небольшой плод цитрусового дерева. Рассматриваемый как отдельный вид апельсина, его обычно едят простым или в фруктовых салатах.",
      price: -21,
    },
    {
      name: "Продукт 1",
      description:
      "Мандарин - небольшой плод цитрусового дерева. Рассматриваемый как отдельный вид апельсина, его обычно едят простым или в фруктовых салатах.",
      price: 30,
    },
    {
      name: "Продукт 2",
      description:
      "Мандарин - небольшой плод цитрусового дерева. Рассматриваемый как отдельный вид апельсина, его обычно едят простым или в фруктовых салатах.",
      price: 50,
    },
    {
      name: "Продукт 3",
      description:
      "Мандарин - небольшой плод цитрусового дерева. Рассматриваемый как отдельный вид апельсина, его обычно едят простым или в фруктовых салатах.",
      price: 70,
    },
    {
      name: "Продукт 4",
      description:
      "Мандарин - небольшой плод цитрусового дерева. Рассматриваемый как отдельный вид апельсина, его обычно едят простым или в фруктовых салатах.",
      price: 500,
    },
    {
      name: "Продукт 5",
      description:
      "Мандарин - небольшой плод цитрусового дерева. Рассматриваемый как отдельный вид апельсина, его обычно едят простым или в фруктовых салатах.",
      price: 2,
    },
  ];

  const [products, setProducts] = useState([...product]);

  const sortByPriceAsc = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const sortByPriceDesc = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  const sortByName = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedProducts);
  };


  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={sortByPriceAsc}>
                Сортировать по возрастанию цены
              </button>
            </li>
            <li>
              <button onClick={sortByPriceDesc}>
                Сортировать по убыванию цены
              </button>
            </li>
            <li>
              <button onClick={sortByName}>
                Сортировать по алфавиту
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default Home12;
