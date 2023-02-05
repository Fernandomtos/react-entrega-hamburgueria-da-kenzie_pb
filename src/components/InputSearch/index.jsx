import { useState } from "react";
import { Button } from "../Button";
import { StyledForm } from "./style";

export const InputSearch = ({ setSearch, typeBtn }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  typeBtn = "submit";
  const showProducts = (event) => {
    event.preventDefault();
    setSearch(filteredProducts);
    setFilteredProducts("");
  };

  return (
    <StyledForm onSubmit={showProducts}>
      <input
        type="text"
        name="itemSearch"
        id="itemSearch"
        placeholder="Digitar Pesquisa"
        value={filteredProducts}
        onChange={(event) => setFilteredProducts(event.target.value)}
      />
      <Button typeBtn={typeBtn}>Pesquisar</Button>
    </StyledForm>
  );
};
