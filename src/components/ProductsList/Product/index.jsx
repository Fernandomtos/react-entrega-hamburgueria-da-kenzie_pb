import { Button } from "../../Button";
import { StyledLi } from "./style";

export const Product = ({
  id,
  name,
  category,
  price,
  image,
  handleClick,
  typeBtn,
}) => {
  return (
    <StyledLi>
      <div className="containerImg">
        <img src={image} alt="Foto do produto" />
      </div>
      <div className="containerProduct">
        <h3>{name}</h3>
        <span className="descriptonProduct">{category}</span>
        <span className="valueProduct">R$ {price}</span>
        <Button id={id} handleClick={handleClick} typeBtn={typeBtn}>
          Adicionar
        </Button>
      </div>
    </StyledLi>
  );
};
