import { StyledLi } from "./style";

export const Card = ({ id, image, name, category, removeProductCart }) => {
  return (
    <StyledLi>
      <div className="containerImg">
        <img src={image} alt="Foto do produto" />
      </div>
      <div className="containerProduct">
        <h3>{name}</h3>
        <span>{category}</span>
      </div>
      <button type="button" onClick={() => removeProductCart(id)}>
        Remover
      </button>
    </StyledLi>
  );
};
