import styled from 'styled-components';

export const LinksSet = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 70%;
`;

export const LinksRow = styled.div``;

export const LinksRowControls = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const GenericButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const RemoveRowButton = styled(GenericButton)`
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: #fd5d5d;
`;

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
