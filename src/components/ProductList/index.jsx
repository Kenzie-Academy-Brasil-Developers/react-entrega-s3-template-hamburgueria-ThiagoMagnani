import { ProductCard } from "./ProductCard";
import style from "../../styles/style.module.scss";

export const ProductList = ({ productList, addToCart }) => {
  return (
    <ul className={style.list}>
      {productList.map((product) => (
        <div>
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        </div>
      ))}
    </ul>
  );
};
