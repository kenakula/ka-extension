import { Icon } from '@components/icon';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IQuickLink } from '@shared/interfaces';
import { Formik } from 'formik';
import { ReactElement, useState } from 'react';

import { IconSelect } from '../icon-select';
import { DEFAULT_VALUES } from './constants';
import { ChooseIconContainer, FormStyled } from './styles';

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
      {({ values, handleBlur, handleChange }) => (
        <FormStyled>
          <TextField
            label="url"
            name="url"
            fullWidth
            value={values.url}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="standard"
          />
          <TextField
            label="iconLink"
            name="iconLink"
            fullWidth
            value={values.iconLink}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="standard"
          />
          <TextField
            label="label"
            name="label"
            fullWidth
            value={values.label}
            onChange={handleChange}
            onBlur={handleBlur}
            variant="standard"
          />
          <ChooseIconContainer>
            <Typography variant="body1">Custom icon:</Typography>
            {values.iconName ? (
              <IconButton onClick={handleOpenIconModal}>
                <Icon.FaIcon iconName={values.iconName}/>
              </IconButton>
            ) : (
              <Button variant="outlined" color="warning" onClick={handleOpenIconModal}>
                choose icon
              </Button>
            )}
            <FormControlLabel
              label="use it"
              control={<Checkbox/>}
              checked={values.useCustomIcon}
              name="useCustomIcon"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <IconSelect
              isOpen={isIconModalOpen}
              handleClose={handleCloseEditModal}
            />
          </ChooseIconContainer>

          <Button type="submit" variant="contained">
            {mode === 'add' ? 'Add' : 'Edit'}
          </Button>
        </FormStyled>
      )}
    </Formik>
  );
};
