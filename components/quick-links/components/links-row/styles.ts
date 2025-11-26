import styled from "styled-components";

interface ILinksListStyles {
  $isOver?: boolean;
}

export const LinksList = styled.ul<ILinksListStyles>`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  border-radius: 22px;
`;
