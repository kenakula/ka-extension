import { styled } from "~node_modules/styled-components";

export const ServicesItem = styled.li`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  background-color: transparent;
  
  &:nth-child(2n) {
    background-color: aliceblue;
  }
`;

export const ServiceName = styled.span`
  margin-right: auto;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const ServiceControls = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;