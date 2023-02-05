import styled from "styled-components";

export const StyledSearch = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 41px;

  p {
    font-size: var(--headline1);
    font-weight: 700;
    color: var(--grey-100);
  }

  span {
    color: var(--grey-50);
  }

  button {
    /* display: none; */
    width: 137px;
  }

  @media (min-width: 769px) {
    span {
      margin-right: 15px;
    }
  }
`;
