import { styled } from 'styled-components';

interface IContainerStyles {
  $isInvalid?: boolean;
}

export const Container = styled.div<IContainerStyles>`
  position: relative;
  padding: ${({ $isInvalid }) => $isInvalid ? '22px 0 5px' : '5px 0'};
  min-width: 350px;
  border: 2px solid ${({ $isInvalid }) => $isInvalid ? 'tomato' : 'transparent'};
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 50%;
  top: 0;
  color: tomato;
  font-weight: 700;
  font-size: 14px;
  transform: translateX(-50%);
`;

export const ServicesList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`;
