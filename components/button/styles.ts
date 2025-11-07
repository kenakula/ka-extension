import { styled } from "styled-components";

export const BaseButton = styled.button`
  padding: 5px 15px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  display: flex;
  transition: opacity 0.3s ease-in;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
  
  &:active{
    opacity: 0.5;
  }
  
  &[disabled] {
    pointer-events: none;
    opacity: 0.3;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: #518fff;
  color: white;
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: #939393;
  color: white;
`