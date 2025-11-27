import styled from 'styled-components';

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const LinkLabel = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;

export const LinkItemStyled = styled.li`
  display: flex;
  min-width: 42px;
`;

export const LinkButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: aliceblue;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.2s ease-in;
  border-radius: 16px;
  min-width: 71px;
  min-height: 71px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    opacity: 0.5;
  }
`;