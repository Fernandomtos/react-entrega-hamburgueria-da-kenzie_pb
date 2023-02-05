import { Product } from "./Product";
import { StyledUl } from "./style";

export const ProductsList = ({ searchProducts, handleClick, typeBtn }) => {
  return (
    <StyledUl>
      {searchProducts.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price.toFixed(2)}
            image={product.img}
            handleClick={handleClick}
            typeBtn={typeBtn}
          />
        );
      })}
    </StyledUl>
  );
};
