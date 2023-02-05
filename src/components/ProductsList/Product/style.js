import styled from "styled-components";

export const StyledLi = styled.li`
  min-width: 300px;
  height: 346px;
  border: 2px solid var(--grey-20);
  border-radius: 8px;

  .containerImg {
    width: 100%;
    height: 150px;
    background-color: var(--grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 26.67px;

    img {
      max-height: 100%;
    }
  }

  .containerProduct {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 22px;

    h3 {
      font-size: var(--headline3);
      color: var(--grey-100);
      margin-bottom: 18.5px;
      font-weight: 700;
    }

    .descriptonProduct {
      font-size: var(--caption);
      color: var(--grey-50);
      margin-bottom: 14px;
    }

    .valueProduct {
      font-size: var(--headline4);
      color: var(--color-primary);
      margin-bottom: 14px;
      font-weight: 600;
    }
  }
`;
