import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const IconDialogHeader = styled(Box)`
  position: sticky;
  z-index: 100;
  left: 0;
  top: 0;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #676767;

  h2 {
    margin: 0 0 20px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;