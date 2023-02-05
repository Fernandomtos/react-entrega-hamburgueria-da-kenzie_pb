import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  height: 60px;
  position: relative;

  input {
    width: 100%;
    height: 100%;
    border: 2px solid var(--grey-20);
    border-radius: 8px;
    font-size: var(--headline);
    padding-left: 15px;
    font-family: "Inter", sans-serif;
  }

  input::placeholder {
    color: var(--grey-20);
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  @media (min-width: 769px) {
    display: flex;
    justify-content: right;

    input {
      width: 365px;
    }
  }
`;
