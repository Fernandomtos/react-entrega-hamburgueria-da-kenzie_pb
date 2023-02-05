import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./style";

export const Header = ({ setSearch, typeBtn }) => {
  return (
    <>
      <StyledHeader>
        <img src="/img/logo.svg" alt="Logo da Hamburgueria" />
        <InputSearch setSearch={setSearch} typeBtn={typeBtn} />
      </StyledHeader>
    </>
  );
};
