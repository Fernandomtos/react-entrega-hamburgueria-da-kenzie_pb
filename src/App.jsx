import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ResultSearch } from "./components/InputSearch/ResultSearch";
import { ProductsList } from "./components/ProductsList";
import { api } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const localStorageCartList = localStorage.getItem("@HamburgueriaKenzie");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(
    localStorageCartList ? JSON.parse(localStorageCartList) : []
  );
  const [search, setSearch] = useState("");
  const typeBtn = "";

  const searchProducts = products.filter((product) => {
    return search === ""
      ? true
      : product.name.toLowerCase().includes(search.toLocaleLowerCase());
  });

  useEffect(() => {
    async function loadHamburgueriaProducts() {
      try {
        setLoading(true);
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadHamburgueriaProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("@HamburgueriaKenzie", JSON.stringify(currentSale));
  }, [currentSale]);

  const handleClick = (id, clean, typeBtn) => {
    typeBtn = "button";
    if (clean === "cleanSearch") {
      setSearch("");
    } else {
      if (currentSale.some((product) => product.id === id)) {
        toast.error("O produto já foi adicionado no carrinho de compras");
      } else {
        toast.success("Adicionando no carrinho com sucesso!");
        const addProduct = products.find((product) => {
          return product.id === id;
        });
        setCurrentSale([...currentSale, addProduct]);
      }
    }
  };

  const removeProductCart = (id) => {
    const newListCart = currentSale.filter((product) => product.id !== id);
    setCurrentSale(newListCart);
  };

  const removeAllCart = () => {
    const newListCart = [];
    setCurrentSale(newListCart);
  };

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <Header setSearch={setSearch} typeBtn={typeBtn} />
          <main>
            <section>
              <ResultSearch search={search} handleClick={handleClick} />
              <ProductsList
                searchProducts={searchProducts}
                handleClick={handleClick}
                typeBtn={typeBtn}
              />
            </section>
            <aside>
              <Cart
                currentSale={currentSale}
                removeProductCart={removeProductCart}
                removeAllCart={removeAllCart}
              />
            </aside>
          </main>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      )}
    </>
  );
}

export default App;
