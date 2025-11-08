import { ReactElement } from "react";

import { Button } from "~components/button/button";
import { FieldContainer, FormStyled } from "~components/quick-links/styles";
import { Field, Form, Formik } from "~node_modules/formik";
import { IQuickLink } from "~shared/interfaces";

const DEFAULT_VALUES: IQuickLink = {
  url: "https://",
  label: "",
  iconLink: "",
  iconName: "",
  useCustomIcon: false,
};

interface IProps {
  handleSubmit: (values: IQuickLink, rowName?: string) => void;
  rowName?: string;
  defaultValues?: IQuickLink;
}

export const CreateForm = ({
  handleSubmit,
  rowName,
  defaultValues = DEFAULT_VALUES,
}: IProps): ReactElement => {
  return (
    <Formik<IQuickLink>
      initialValues={defaultValues}
      onSubmit={(values) => {
        handleSubmit(values, rowName);
      }}
    >
      <FormStyled>
        <FieldContainer>
          <label htmlFor="url">url</label>
          <Field id="url" name="url" />
        </FieldContainer>

        <FieldContainer>
          <label htmlFor="label">label</label>
          <Field id="label" name="label" />
        </FieldContainer>

        {/*<FieldContainer>*/}
        {/*  <label htmlFor="iconLink">iconLink</label>*/}
        {/*  <Field id="iconLink" name="iconLink" />*/}
        {/*</FieldContainer>*/}

        {/*<FieldContainer>*/}
        {/*  <label htmlFor="iconName">iconName</label>*/}
        {/*  <Field id="iconName" name="iconName" />*/}
        {/*</FieldContainer>*/}

        {/*<FieldContainer>*/}
        {/*  <label htmlFor="useCustomIcon">use custom icon</label>*/}
        {/*  <Field name="useCustomIcon" id="useCustomIcon" type="checkbox" />*/}
        {/*</FieldContainer>*/}

        <Button variant="primary" type="submit">
          Add
        </Button>
      </FormStyled>
    </Formik>
  );
};
