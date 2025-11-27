import { Icon } from '@components/icon';
import { IQuickLink } from '@shared/interfaces';
import { Field, Formik } from 'formik';
import { ReactElement, useState } from 'react';

import { IconSelect } from '../icon-select';
import { DEFAULT_VALUES } from './constants';
import { FieldContainer, FormStyled } from './styles';

interface IProps {
  handleSubmit: (values: IQuickLink, rowName?: string) => void;
  rowName?: string;
  defaultValues?: IQuickLink;
  handleClosePopover: () => void;
}

export const CreateForm = ({
  handleSubmit,
  rowName,
  handleClosePopover,
  defaultValues = DEFAULT_VALUES,
}: IProps): ReactElement => {
  const [isIconModalOpen, setIsIconModalOpen] = useState(false);

  const handleCloseEditModal = (): void => {
    setIsIconModalOpen(false);
  };

  const handleFormSubmit = (values: IQuickLink): void => {
    let urlValue = values.url;

    if (!urlValue.startsWith('https://')) {
      urlValue = `https://${urlValue}`;
      values.url = urlValue;
    }

    handleSubmit(values, rowName);
    handleClosePopover();
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
            <Field id="url" name="url"/>
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="label">label</label>
            <Field id="label" name="label"/>
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="#">select custom icon</label>
            <button
              type="button"
              onClick={handleOpenIconModal}
            >
              {values.iconName ? (
                <Icon.FaIcon iconName={values.iconName}/>
              ) : (
                <span>choose icon</span>
              )}
            </button>
            <IconSelect
              isOpen={isIconModalOpen}
              handleClose={handleCloseEditModal}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="useCustomIcon">use custom icon</label>
            <Field name="useCustomIcon" id="useCustomIcon" type="checkbox"/>
          </FieldContainer>

          <button type="submit">
            Add
          </button>
        </FormStyled>
      )}
    </Formik>
  );
};
