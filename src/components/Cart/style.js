import styled from "styled-components";

export const StyledUl = styled.ul`
  width: 100%;
  background-color: var(--grey-0);
  max-height: 470px;
  overflow-y: auto;

  .containerTitle {
    width: 100%;
    height: 65px;
    background-color: var(--color-primary);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20.93px;

    h3 {
      font-size: var(--headline3);
      color: white;
      font-weight: 700;
    }
  }

  .cartEmpty {
    min-height: 223px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: var(--headline3);
      color: var(--grey-100);
      font-weight: 700;
      margin-bottom: 20px;
    }

    span {
      font-size: var(--headline4);
      color: var(--grey-50);
    }
  }

  .containerFooter {
    height: 127px;
    border-top: 2px solid;
    margin-top: 21px;
    margin-left: 18.45px;
    margin-right: 18.45px;
    border-color: var(--grey-20);
    display: flex;
    flex-direction: column;

    div {
      margin-top: 21px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;

      p,
      span {
        color: var(--grey-100);
        font-size: var(--headline4);
        font-weight: 600;
      }

      span {
        color: var(--grey-50);
      }
    }

    button {
      height: 60px;
      background-color: var(--grey-20);
      color: var(--grey-50);
      font-weight: 600;
      border-radius: 8px;
      border: none;
    }
  }

  .hidden {
    display: none;
  }

  @media (min-width: 769px) {
    .containerTitle {
      width: 365px;
    }
  }
`;
