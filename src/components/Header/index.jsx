import { useState } from "react";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import Logo from "../../assets/Logo.svg";
import stylesHeader from "../../styles/header.module.scss";

export const Header = ({ setIsOpen, setSearchValue, cartItemCount }) => {
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(value);
  };

  return (
    <header className={stylesHeader.header}>
      <div className={stylesHeader.principal}>
        <div className={stylesHeader.boxHeader}>
          <img src={Logo} alt="Logo Kenzie Burguer" />
          <button className={stylesHeader.cart} onClick={() => setIsOpen(true)}>
            <MdShoppingCart size={21} />
            <span className={stylesHeader.numCart}>{cartItemCount}</span>
          </button>
        </div>
        <form className={stylesHeader.form} onSubmit={handleSearch}>
          <input
            className={stylesHeader.boxTextSearch}
            type="text"
            value={value}
            placeholder="Digitar Pesquisa"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={stylesHeader.buttonSearch} type="submit">
            <MdSearch size={16} />
          </button>
        </form>
      </div>
    </header>
  );
};
