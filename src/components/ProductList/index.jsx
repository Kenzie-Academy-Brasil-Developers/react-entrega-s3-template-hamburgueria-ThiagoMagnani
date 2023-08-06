import { ProductCard } from "./ProductCard";
import style from "../../styles/style.module.scss";

export const ProductList = ({ productList, addToCart }) => {
  return (
    <ul className={style.list}>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={{ ...product, id: product.id || nextProductId }}
          addToCart={addToCart}
        />
      ))}
    </ul>
  );
};
