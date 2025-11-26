import { ReactElement, useEffect, useRef, useState } from "react";
import { LinkItem } from "./components/link-item/link-item";
import { IQuickLink, TQuickLinksPanel } from "@shared/interfaces";

import { LinksList, LinksRow, LinksSet } from "./styles";
import { EditLinkDialog } from "./components/edit-link-dialog/edit-link-dialog";
import { SettingsDialog } from "./components/settings-dialog/settings-dialog";
import { AddLinkButton } from "./components/add-link-button/add-link-button";

const STORAGE_LINKS_KEY = "kp_quick_links";

const DEFAULT_SET: TQuickLinksPanel = {
  default: {
    links: [
      {
        url: "https://yandex.ru/maps",
        label: "",
        iconLink: "",
        iconName: "",
        useCustomIcon: false,
      },
      {
        url: "https://kinopoisk.ru",
        label: "",
        iconLink: "",
        iconName: "",
        useCustomIcon: false,
      },
      {
        url: "https://youtube.com",
        label: "",
        iconLink: "",
        iconName: "",
        useCustomIcon: false,
      },
      {
        url: "https://yandex.ru/pogoda/ru/saint-petersburg",
        label: "",
        iconLink: "",
        iconName: "",
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

  const handleCloseEditModal = (state: boolean): void => {
    if (!state) {
      setEditingLink(null);
      setEditingRow(null);
    }
  };

  const handleDeleteLink = (setName: string, url: string): void => {
    const panelCopy = { ...linksPanel };
    panelCopy[setName].links = panelCopy[setName].links.filter(
      (link) => link.url !== url,
    );
    setLinksPanel(panelCopy);
  };

  const handleEditLinkClick = (setName: string, link: IQuickLink) => {
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

  const handleAddRow = (rowName?: string) => {
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
          !data.isHidden ? (
            <LinksRow key={name}>
              <LinksList>
                {data.links.map((link) => (
                  <LinkItem
                    key={link.url}
                    link={link}
                    setName={name}
                    handleDeleteLink={handleDeleteLink}
                    handleEditLink={handleEditLinkClick}
                  />
                ))}
                <AddLinkButton rowName={name} addLink={handleAddLink} />
              </LinksList>
            </LinksRow>
          ) : null,
        )}
      </LinksSet>
      <EditLinkDialog
        isOpen={!!editingLink}
        onOpenChange={handleCloseEditModal}
        handleSubmit={handleEditLink}
        defaultValues={editingLink}
      />
      <SettingsDialog
        toggleRowVisibility={toggleRowVisibility}
        linksPanel={linksPanel}
        addRow={handleAddRow}
        removeRow={handleRemoveRow}
      />
    </>
  );
};
