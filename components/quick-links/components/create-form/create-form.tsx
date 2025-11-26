import { ReactElement, useState } from "react";

import { Button } from "@components/button";
import { FieldContainer, FormStyled } from "./styles";
import { Field, Formik } from "formik";
import { IQuickLink } from "@shared/interfaces";
import { IconSelect } from "../icon-select/icon-select";
import { DEFAULT_VALUES } from "./constants";
import { Icon } from "@components/icon/icon";

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

  const handleFormSubmit = (values: IQuickLink): void => {
    let urlValue = values.url;

    if (!urlValue.startsWith("https://")) {
      urlValue = `https://${urlValue}`;
      values.url = urlValue;
    }

    handleSubmit(values, rowName);
  };

  const handleOpenIconModal = (): void => {
    setIsIconModalOpen(true);
  };

  return (
    <Formik<IQuickLink>
      initialValues={defaultValues}
      onSubmit={handleFormSubmit}
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
            <Button
              type="button"
              variant="secondary"
              onClick={handleOpenIconModal}
            >
              {values.iconName ? (
                <Icon.FaIcon iconName={values.iconName} />
              ) : (
                <span>choose icon</span>
              )}
            </Button>
            <IconSelect
              isOpen={isIconModalOpen}
              onOpenChange={handleCloseEditModal}
            />
          </FieldContainer>

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
