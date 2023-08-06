import { MdDelete } from "react-icons/md";
import styleListModal from "../../../styles/Modal/listModal.module.scss";

export const CartItemCard = ({ product, removeItemCart }) => {
  return (
    <li className={styleListModal.itens}>
      <div className={styleListModal.itensContainner}>
        <img
          className={styleListModal.imgItensModal}
          src={product.img}
          alt={product.name}
        />
        <div className={styleListModal.listSpace}>
          <div className={styleListModal.itemBox}>
            <div>
              <h3>{product.name}</h3>
              <span className={styleListModal.priceProduct}>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
          <div>
            <button
              className={styleListModal.buttonRemove}
              aria-label="delete"
              title="Remover item"
              onClick={() => removeItemCart(product)}
            >
              <MdDelete size={21} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
