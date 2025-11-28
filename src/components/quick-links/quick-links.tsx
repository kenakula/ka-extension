import { IQuickLink, TQuickLinksPanel } from '@shared/interfaces';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { FiSettings } from 'react-icons/fi';

import { EditLinkDialog } from './components/edit-link-dialog';
import { LinksRow } from './components/links-row';
import { SettingsDialog } from './components/settings-dialog';
import { LinksSet, SettingsButton } from './styles';

const STORAGE_LINKS_KEY = 'kp_quick_links';

const DEFAULT_SET: TQuickLinksPanel = {
  defaultSet: {
    links: [
      {
        url: 'https://yandex.ru/maps',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        url: 'https://kinopoisk.ru',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        url: 'https://youtube.com',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
      {
        url: 'https://yandex.ru/pogoda/ru/saint-petersburg',
        label: '',
        iconLink: '',
        iconName: '',
        useCustomIcon: false,
      },
    ],
    isHidden: false,
  },
};

export const QuickLinks = (): ReactElement => {
  const areLinksSet = useRef<boolean>(false);

  const [linksPanel, setLinksPanel] = useState<TQuickLinksPanel>(DEFAULT_SET);

  const [editingLink, setEditingLink] = useState<IQuickLink | null>(null);
  const [editingRow, setEditingRow] = useState<string | null>(null);

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const handleRenameRow = (rowName: string, newName: string): void => {
    setLinksPanel((prev) => {
      const prevCopy = { ...prev };
      const rowCopy = prev[rowName];
      delete prevCopy[rowName];

      return { ...prevCopy, [newName]: rowCopy };
    });
  };

  const handleCloseSettings = (): void => {
    setIsSettingsOpen(false);
  };

  const handleOpenSettings = (): void => {
    setIsSettingsOpen(true);
  };

  const handleSort = (setName: string, from: number, to: number): void => {
    const links = linksPanel[setName].links.slice();
    const isRtl = to > from;
    const temp = links[from];

    if (isRtl) {
      let i = from + 1;

      while (i <= to) {
        links[i - 1] = links[i];

        i++;
      }

      links[to] = temp;
    } else {
      let i = from - 1;

      while (i >= to) {
        links[i + 1] = links[i];

        i--;
      }

      links[to] = temp;
    }

    setLinksPanel(prev => {
      const row = prev[setName];
      row.links = links;

      return { ...prev, [setName]: row };
    });
  };

  const handleCloseEditModal = (): void => {
    setEditingLink(null);
    setEditingRow(null);
  };

  const handleDeleteLink = (setName: string, url: string): void => {
    const panelCopy = { ...linksPanel };
    panelCopy[setName].links = panelCopy[setName].links.filter(
      (link) => link.url !== url,
    );
    setLinksPanel(panelCopy);
  };

  const handleEditLinkClick = (setName: string, link: IQuickLink): void => {
    setEditingLink(link);
    setEditingRow(setName);
  };

  const handleAddLink = (link: IQuickLink, rowName: string): void => {
    const setCopy = { ...linksPanel };
    setCopy[rowName].links = [...setCopy[rowName].links, link];
    setLinksPanel(setCopy);
  };

  const handleEditLink = (link: IQuickLink): void => {
    const setCopy = { ...linksPanel };
    const foundLink = setCopy[editingRow].links.find(
      (item) => item.url === editingLink.url,
    );

    if (foundLink) {
      Object.assign(foundLink, link);
      setLinksPanel(setCopy);
    }

    setEditingLink(null);
    setEditingRow(null);
  };

  const toggleRowVisibility = (rowName: string): void => {
    const setCopy = { ...linksPanel };
    setCopy[rowName].isHidden = !setCopy[rowName].isHidden;
    setLinksPanel(setCopy);
  };

  const handleAddRow = (rowName?: string): void => {
    const name = rowName ?? `newSet[${Date.now()}]`;
    setLinksPanel({ ...linksPanel, [name]: { links: [], isHidden: false } });
  };

  const handleRemoveRow = (rowName: string): void => {
    const setCopy = { ...linksPanel };
    delete setCopy[rowName];
    setLinksPanel(setCopy);
  };

  useEffect(() => {
    const storedSet =
      localStorage.getItem(STORAGE_LINKS_KEY) ?? JSON.stringify(DEFAULT_SET);
    setLinksPanel(JSON.parse(storedSet));
    areLinksSet.current = true;
  }, []);

  useEffect(() => {
    if (!areLinksSet.current) return;

    localStorage.setItem(STORAGE_LINKS_KEY, JSON.stringify(linksPanel));
  }, [linksPanel]);

  return (
    <>
      <LinksSet>
        {Object.entries(linksPanel).map(([name, data]) =>
          !data.isHidden ? <LinksRow
            handleSort={handleSort}
            key={name}
            setName={name}
            list={data.links}
            handleAdd={handleAddLink}
            handleDelete={handleDeleteLink}
            handleEdit={handleEditLinkClick}
          /> : null,
        )}
      </LinksSet>
      <SettingsButton onClick={handleOpenSettings}>
        <FiSettings size={36}/>
      </SettingsButton>
      <EditLinkDialog
        isOpen={!!editingLink}
        handleClose={handleCloseEditModal}
        handleSubmit={handleEditLink}
        defaultValues={editingLink}
      />
      <SettingsDialog
        isOpen={isSettingsOpen}
        handleRenameRow={handleRenameRow}
        toggleRowVisibility={toggleRowVisibility}
        linksPanel={linksPanel}
        addRow={handleAddRow}
        removeRow={handleRemoveRow}
        handleClose={handleCloseSettings}
      />
    </>
  );
};
