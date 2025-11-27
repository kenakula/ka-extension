import { GenericButton } from '@components/quick-links/styles';
import styled from 'styled-components';

export const SettingsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SettingsSectionTitle = styled.h3`
  margin: 0 0 20px;
`;

export const SettingsSectionList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;

  li {
    display: flex;
    column-gap: 20px;
    width: 100%;

    & > span {
      margin-right: auto;
      font-size: 12px;
    }
  }
`;

export const LinksRowControls = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const RemoveRowButton = styled(GenericButton)`
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: #fd5d5d;
`;

