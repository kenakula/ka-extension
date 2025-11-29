import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Form } from 'formik';

export const FormStyled = styled(Form)`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  & > button {
    align-self: center;
  }
`;

export const ChooseIconContainer = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
