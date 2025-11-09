import styled from "styled-components";
import { Dialog } from "radix-ui";

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(42, 52, 64, 0.7);
  backdrop-filter: blur(5px);
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const DialogDescription = styled(Dialog.Description)``;

export const DialogTitle = styled(Dialog.Title)`
  margin: 0 0 20px;
  text-align: center;
`;

export const DialogSection = styled.div``;
