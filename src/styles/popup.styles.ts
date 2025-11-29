import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface IContainerStyles {
  $isInvalid?: boolean;
}

export const Container = styled(Box)<IContainerStyles>`
  position: relative;
  min-width: 350px;
`;

export const ErrorMessage = styled(Typography)`
  position: absolute;
  left: 50%;
  top: 0;
  color: tomato;
  transform: translateX(-50%);
`;

export const ServicesList = styled(Box)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
`;
