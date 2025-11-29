import { useQuickLinks } from '@components/quick-links/quick-links-context';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DEFAULT_SET_ID } from '@shared/constants';
import { FormEvent, ReactElement, useState } from 'react';

import { LinksRowControls, StyledRow } from './styles';

interface IProps {
  id: string;
  setName: string;
  isHidden: boolean;
}

export const SettingsRow = ({ setName, isHidden, id }: IProps): ReactElement => {
  const [rowNameFieldValue, setRowNameFieldValue] = useState(setName);
  const [isEditingName, setIsEditingName] = useState(false);

  const { handleRenameRow, toggleRowVisibility, handleDeleteRow } = useQuickLinks();

  const handleEditName = (): void => {
    setIsEditingName(true);
  };

  const handleSaveName = (): void => {
    handleRenameRow(id, rowNameFieldValue);
    setIsEditingName(false);
  };

  const handleRowNameInput = (event: FormEvent): void => {
    setRowNameFieldValue((event.target as HTMLInputElement).value);
  };

  const handleCancel = (): void => {
    setIsEditingName(false);
    setRowNameFieldValue(setName);
  };

  return (
    <StyledRow>
      {isEditingName ? (
        <Stack direction="row">
          <TextField
            onInput={handleRowNameInput} variant="standard" value={rowNameFieldValue}
          />
          <IconButton color="success" size="small" onClick={handleSaveName}>
            <CheckCircleIcon/>
          </IconButton>
          <IconButton color="error" onClick={handleCancel}>
            <CancelIcon/>
          </IconButton>
        </Stack>
      ) : <Typography mr="auto" variant="body1">{setName}</Typography>}
      <LinksRowControls>
        <IconButton size="small" onClick={() => toggleRowVisibility(id)}>
          {isHidden ? <VisibilityOffIcon/> : <VisibilityIcon/>}
        </IconButton>
        <IconButton size="small" onClick={handleEditName}>
          <EditIcon/>
        </IconButton>
        {id !== DEFAULT_SET_ID ? (
          <IconButton
            color="error"
            size="small"
            onClick={() => handleDeleteRow(id)}
          >
            <DeleteOutlineIcon/>
          </IconButton>
        ) : null}
      </LinksRowControls>
    </StyledRow>
  );
};