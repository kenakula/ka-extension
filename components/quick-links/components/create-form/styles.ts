import styled from "styled-components";
import { Form } from "formik";

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  & > button {
    align-self: center;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  label {
    font-size: 12px;
  }
`;
