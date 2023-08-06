import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styleModal from "../../styles/Modal/modal.module.scss";
import styleModalHeader from "../../styles/Modal/modalHeader.module.scss";
import styleListModal from "../../styles/Modal/listModal.module.scss";
import styleTotalModal from "../../styles/Modal/totalModal.module.scss";
import React from "react";

export const CartModal = ({
  children,
  cartList,
  setIsOpen,
  removeItemCart,
  clearLocal,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <div role="dialog" className={styleModal.modal}>
      <div className={styleModal.modalBox}>
        <div className={styleModalHeader.headerModal}>
          <h2 className={styleModalHeader.title}>Carrinho de compras</h2>
          <button
            className={styleModalHeader.closeButton}
            onClick={() => setIsOpen(false)}
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={styleModal.boxModalContainner}>
          <ul className={styleListModal.listModal}>
            {cartList.map((product) => (
              <CartItemCard
                key={product.id}
                product={product}
                removeItemCart={removeItemCart}
              />
            ))}
          </ul>
          <div className={styleTotalModal.total}>
            <div className={styleTotalModal.totalContainner}>
              <span>Total</span>
              <span className={styleTotalModal.totalPrice}>
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <button
              className={styleTotalModal.buttonRemoveAll}
              onClick={clearLocal}
            >
              Remover todos
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
