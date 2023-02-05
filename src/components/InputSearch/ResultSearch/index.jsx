import { Button } from "../../Button";
import { StyledSearch } from "./style";

export const ResultSearch = ({ search, handleClick }) => {
  const clean = "cleanSearch";

  return (
    <>
      {search && (
        <StyledSearch>
          <p>
            Resultados para: <span>{search}</span>
          </p>
          <Button clean={clean} handleClick={handleClick}>
            Limpar busca
          </Button>
        </StyledSearch>
      )}
    </>
  );
};
