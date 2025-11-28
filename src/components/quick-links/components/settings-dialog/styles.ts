import Box from '@mui/material/Box';
import { styled as muiStyled } from '@mui/material/styles';
import styled from 'styled-components';

export const SettingsContainer = styled.div`
  padding: 20px 10px;
`;

export const SettingsSectionHeader = muiStyled(Box)`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledRow = muiStyled(Box)`
  display: flex;
  align-items: center;
  column-gap: 20px;
  width: 100%;
`;

export const LinksRowControls = styled.div`
  display: flex;
  align-items: center;
`;

