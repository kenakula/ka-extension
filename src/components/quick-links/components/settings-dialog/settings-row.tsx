import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FormEvent, ReactElement, useState } from 'react';

import { LinksRowControls, StyledRow } from './styles';

interface IProps {
  handleRemoveRow: (rowName: string) => void;
  setName: string;
  isHidden: boolean;
  toggleRowVisibility: (rowName: string) => void;
  handleRenameRow: (rowName: string, newName: string) => void;
}

export const SettingsRow = ({
  setName,
  isHidden,
  toggleRowVisibility,
  handleRemoveRow,
  handleRenameRow,
}: IProps): ReactElement => {
  const [rowNameFieldValue, setRowNameFieldValue] = useState(setName);
  const [isEditingName, setIsEditingName] = useState(false);

  const handleEditName = (): void => {
    setIsEditingName(true);
  };

  const handleSaveName = (): void => {
    // TODO если имя повторяется, то пизда
    handleRenameRow(setName, rowNameFieldValue);
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
          <button type="button" onClick={handleSaveName}>save</button>
          <button type="button" onClick={handleCancel}>cancel</button>
        </Stack>
      ) : <Typography
        mr="auto"
        variant="body1"
      >{setName}</Typography>}
      <LinksRowControls>
        <IconButton size="small" onClick={() => toggleRowVisibility(setName)}>
          {isHidden ? <VisibilityOffIcon/> : <VisibilityIcon/>}
        </IconButton>
        <IconButton
          size="small" onClick={handleEditName}
        >
          <EditIcon/>
        </IconButton>
        <IconButton
          disabled={setName === 'defaultSet'}
          color="error"
          size="small"
          onClick={() => handleRemoveRow(setName)}
        >
          <DeleteOutlineIcon/>
        </IconButton>
      </LinksRowControls>
    </StyledRow>
  );
};