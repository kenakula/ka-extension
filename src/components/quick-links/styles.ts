import styled from 'styled-components';

export const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 70%;
`;

export const SettingsButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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