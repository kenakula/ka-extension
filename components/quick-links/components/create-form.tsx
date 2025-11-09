import { ReactElement, useState } from "react";

import { Button } from "~components/button/button";
import {
  FieldContainer,
  FormStyled,
  GenericButton,
} from "~components/quick-links/styles";
import { Field, Formik } from "~node_modules/formik";
import { IQuickLink } from "~shared/interfaces";
import { IconSelect } from "~components/quick-links/components/icon-select";

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
  const [isIconModalOpen, setIsIconModalOpen] = useState(false);

  const handleCloseEditModal = (state: boolean): void => {
    if (!state) {
      setIsIconModalOpen(false);
    }
  };

  return (
    <Formik<IQuickLink>
      initialValues={defaultValues}
      onSubmit={(values) => {
        handleSubmit(values, rowName);
      }}
    >
      {({ values }) => (
        <FormStyled>
          <FieldContainer>
            <label htmlFor="url">url</label>
            <Field id="url" name="url" />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="label">label</label>
            <Field id="label" name="label" />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="#">select custom icon</label>
            <GenericButton
              type="button"
              onClick={() => {
                setIsIconModalOpen(true);
              }}
            >
              {values.iconName ? (
                <span>{values.iconName}</span>
              ) : (
                <span>choose icon</span>
              )}
            </GenericButton>
            <IconSelect
              isOpen={isIconModalOpen}
              onOpenChange={handleCloseEditModal}
            />
          </FieldContainer>

          {/*<FieldContainer>*/}
          {/*  <label htmlFor="iconLink">iconLink</label>*/}
          {/*  <Field id="iconLink" name="iconLink" />*/}
          {/*</FieldContainer>*/}

          <FieldContainer>
            <label htmlFor="useCustomIcon">use custom icon</label>
            <Field name="useCustomIcon" id="useCustomIcon" type="checkbox" />
          </FieldContainer>

          <Button variant="primary" type="submit">
            Add
          </Button>
        </FormStyled>
      )}
    </Formik>
  );
};
