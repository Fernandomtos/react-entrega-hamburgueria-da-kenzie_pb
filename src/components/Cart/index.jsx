import { Card } from "./Card";
import { StyledUl } from "./style";

export const Cart = ({ currentSale, removeProductCart, removeAllCart }) => {
  const totalCart = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);

  const converteTotal = totalCart.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledUl>
      <div className="containerTitle">
        <h3>Carrinho de Compras</h3>
      </div>
      <li className={currentSale == "" ? "cartEmpty" : "cartEmpty hidden"}>
        <p>Sua sacola está vazia</p>
        <span>Adicione itens</span>
      </li>
      {currentSale.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            image={product.img}
            name={product.name}
            category={product.category}
            removeProductCart={removeProductCart}
          />
        );
      })}
      <div className={currentSale == "" ? "hidden" : "containerFooter"}>
        <div>
          <p>Total</p>
          <span>{converteTotal}</span>
        </div>
        <button type="button" onClick={() => removeAllCart()}>
          Remover todos
        </button>
      </div>
    </StyledUl>
  );
};
