import { useEffect, useState } from "react";
import { CartModal } from "../../components/Modal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const getCartItemCount = () => {
    return cartList.length;
  };
  const updateCartItemCount = () => {
    setCartItemCount(getCartItemCount());
  };

  const addToCart = (product) => {
    const isProductInCart = cartList.some((item) => item.id === product.id);
    if (isProductInCart) {
      return;
    }
    setCartList((prevCard) => [...prevCard, product]);
    localStorage.setItem("cart", JSON.stringify([...cartList, product]));
  };

  const getStorage = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartList(storedCart);
  };

  useEffect(() => {
    getStorage();
    updateCartItemCount();
  }, []);

  useEffect(() => {
    updateCartItemCount();
  }, [cartList]);

  useEffect(() => {
    const getCard = async () => {
      const response = await fetch(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );
      const json = await response.json();
      setProductList(json);
    };
    getCard();
  }, []);

  const removeItemCart = (product) => {
    setCartList((prevCard) =>
      prevCard.filter((item) => item.id !== product.id)
    );
    localStorage.setItem(
      "cart",
      JSON.stringify(cartList.filter((item) => item.id !== product.id))
    );
  };

  const clearLocal = () => {
    setCartList([]);
    localStorage.removeItem("cart");
  };

  const filterProducts = (productList, searchValue) => {
    return productList.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(searchValue.toLowerCase());
    });
  };

  useEffect(() => {
    const filteredList = filterProducts(productList, searchValue);
    setFilteredProductList(filteredList);
  }, [productList, searchValue]);

  return (
    <>
      <Header
        setIsOpen={setIsOpen}
        setSearchValue={setSearchValue}
        cartItemCount={cartItemCount}
      />
      <main>
        <ProductList productList={filteredProductList} addToCart={addToCart} />
        {isOpen ? (
          <CartModal
            cartList={cartList}
            setIsOpen={setIsOpen}
            setCartList={setCartList}
            removeItemCart={removeItemCart}
            clearLocal={clearLocal}
          />
        ) : null}
      </main>
    </>
  );
};
