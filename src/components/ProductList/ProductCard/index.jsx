import style from "../../../styles/style.module.scss";

export const ProductCard = ({ product, addToCart }) => {
  return (
    <li className={style.itens}>
      <div className={style.itensImgContainner}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={style.ItensDetails}>
        <h3>{product.name}</h3>
        <span className={style.category}>{product.category}</span>
        <span className={style.price}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className={style.addButton} onClick={() => addToCart(product)}>
          Adicionar
        </button>
      </div>
    </li>
  );
};
