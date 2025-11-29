import { ReactElement } from 'react';
import { FiSettings } from 'react-icons/fi';

import { EditLinkDialog } from './components/edit-link-dialog';
import { LinksList } from './components/links-list';
import { SettingsDialog } from './components/settings-dialog';
import { useQuickLinks } from './quick-links-context';
import { ListsContainer, SettingsButton } from './styles';

export const QuickLinks = (): ReactElement => {
  const { linksRows, handleOpenDrawer, isSettingsDrawerOpen, handleCloseDrawer } = useQuickLinks();
  
  return (
    <>
      <ListsContainer>
        {linksRows.map(({ links, isHidden, id }) =>
          !isHidden ? <LinksList key={id} rowId={id} links={links}/> : null,
        )}
      </ListsContainer>
      <SettingsButton onClick={handleOpenDrawer}>
        <FiSettings size={36}/>
      </SettingsButton>
      <EditLinkDialog/>
      <SettingsDialog
        isOpen={isSettingsDrawerOpen}
        linksRows={linksRows}
        handleClose={handleCloseDrawer}
      />
    </>
  );
};
