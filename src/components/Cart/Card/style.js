import styled from "styled-components";

export const StyledLi = styled.li`
  height: 80px;
  margin-top: 20px;
  margin-left: 18.45px;
  margin-right: 18.45px;
  display: flex;
  position: relative;

  .containerImg {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-20);
    margin-right: 10px;

    img {
      width: 70px;
      height: 70px;
    }
  }

  h3 {
    font-size: var(--headline3);
    color: var(--grey-100);
    font-weight: 700;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  span {
    color: var(--grey-50);
    font-size: var(--caption);
  }

  button {
    border: none;
    background-color: transparent;
    font-size: var(--caption);
    color: #bdbdbd;
    position: absolute;
    top: 7px;
    right: 0;
  }
`;
