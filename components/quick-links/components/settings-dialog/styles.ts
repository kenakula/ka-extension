import { GenericButton } from '@components/quick-links/styles';
import { Dialog } from 'radix-ui';
import styled from 'styled-components';

export const SettingsButton = styled(Dialog.Trigger)`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const SettingsContent = styled(Dialog.Content)`
  position: absolute;
  z-index: 100;
  right: 0;
  top: 0;
  bottom: 0;
  width: 350px;
  padding: 10px 20px;
  background-color: rgba(240, 248, 255, 0.2);
`;

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

