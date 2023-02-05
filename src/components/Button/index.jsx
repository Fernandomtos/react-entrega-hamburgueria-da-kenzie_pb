import { StyledButton } from "./style";
import { ToastContainer, toast } from "react-toastify";

export const Button = ({ id, clean, children, handleClick, typeBtn }) => {
  const toastSearch = () => {
    toast.info("Pesquisa realizada!");
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
