import { StyledButton } from "./style";

export const Button = ({ id, clean, children, handleClick, typeBtn }) => {
  const toastSearch = () => {
    console.log("PESQUISA REALIZADA COM SUCESSO!");
  };

  return (
    <StyledButton
      type={typeBtn === "submit" ? "submit" : "button"}
      onClick={
        typeBtn === "submit"
          ? () => toastSearch()
          : () => handleClick(id, clean)
      }
    >
      {children}
    </StyledButton>
  );
};
