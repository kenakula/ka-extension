import { Icon } from '@components/icon';
import Button from '@mui/material/Button';
import { IQuickLink } from '@shared/interfaces';
import { Field, Formik } from 'formik';
import { ReactElement, useState } from 'react';

import { IconSelect } from '../icon-select';
import { DEFAULT_VALUES } from './constants';
import { FieldContainer, FormStyled } from './styles';

interface IProps {
  mode: 'edit' | 'add';
  defaultValues?: IQuickLink;
  handleClosePopover?: () => void;
  rowId: string;
  handleSubmit: (link: IQuickLink) => void;
}

export const LinkForm = ({
  handleClosePopover,
  handleSubmit,
  mode,
  rowId,
  defaultValues = DEFAULT_VALUES,
}: IProps): ReactElement => {
  const [isIconModalOpen, setIsIconModalOpen] = useState(false);

  const handleCloseEditModal = (): void => {
    setIsIconModalOpen(false);
  };

  const handleFormSubmit = (values: IQuickLink): void => {
    handleSubmit({ ...values, rowId });
    handleClosePopover?.();
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
            <Button onClick={handleOpenIconModal}>
              {values.iconName ? (
                <Icon.FaIcon iconName={values.iconName}/>
              ) : (
                <span>choose icon</span>
              )}
            </Button>
            <IconSelect
              isOpen={isIconModalOpen}
              handleClose={handleCloseEditModal}
            />
          </FieldContainer>

          <FieldContainer>
            <label htmlFor="useCustomIcon">use custom icon</label>
            <Field name="useCustomIcon" id="useCustomIcon" type="checkbox"/>
          </FieldContainer>

          <Button type="submit" variant="contained">
            {mode === 'add' ? 'Add' : 'Edit'}
          </Button>
        </FormStyled>
      )}
    </Formik>
  );
};
