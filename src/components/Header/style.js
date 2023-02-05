import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-left: 3.85%;
  padding-right: 3.85%;
  width: 100vw;
  height: 139px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-0);
  padding: 23px 16px 14px;

  @media (min-width: 769px) {
    padding-left: 7.99%;
    padding-right: 7.99%;
    flex-direction: row;
  }
`;
