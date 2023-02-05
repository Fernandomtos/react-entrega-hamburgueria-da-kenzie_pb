import styled from "styled-components";

export const StyledUl = styled.ul`
  width: 100%;
  height: 361px;
  overflow-y: auto;
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    flex-wrap: wrap;
    height: 735px;
  }
`;
