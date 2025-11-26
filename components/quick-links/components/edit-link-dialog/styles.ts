import { Dialog } from 'radix-ui';
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
