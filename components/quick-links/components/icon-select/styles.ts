import { Dialog, RadioGroup } from 'radix-ui';
import styled from 'styled-components';

export const EditDialog = styled(Dialog.Content)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  background-color: rgba(240, 248, 255, 0.23);
  padding: 10px;
  border-radius: 8px;
`;

export const IconDialogHeader = styled.div`
  position: sticky;
  z-index: 100;
  left: 0;
  top: 0;
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: #676767;

  h2 {
    margin: 0 0 20px;
  }
`;

export const IconDialogContent = styled(Dialog.Content)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
  background-color: rgba(240, 248, 255, 0.2);
  border-radius: 8px;
  max-height: 70%;
  overflow-y: auto;
  overflow-x: hidden;

  ul {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 0;
    padding: 0 20px 20px;
    list-style: none;
    font-size: 14px;
  }

  li {
    display: flex;
    justify-content: center;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 5px;
      padding: 10px;
      border: 1px solid aliceblue;
      border-radius: 8px;
    }
  }
`;

export const RadioItem = styled(RadioGroup.Item)`
  background-color: ${({ value }) => value};
  width: 25px;
  height: 25px;
  border-radius: 100%;
  box-shadow: 0 2px 10px #2a3440;

  &:hover {
    opacity: 0.7;
  }
`;

export const RadioIndicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #2a3440;
  }
`;
