import { Dialog, Tooltip } from "radix-ui";
import { ReactElement, useEffect, useRef, useState } from "react";
import { SlPlus } from "react-icons/sl";

import { CreateForm } from "~components/quick-links/components/create-form";
import { LinkItem } from "~components/quick-links/components/link-item";
import { IQuickLink, TQuickLinksPanel } from "~shared/interfaces";

import {
  EditDialog,
  GenericButton,
  LinksList,
  LinksRow,
  LinksSet,
  TooltipContent,
} from "./styles";
import { RowControls } from "~components/quick-links/components/row-controls";

const STORAGE_LINKS_KEY = "kp_quick_links";

const DEFAULT_SET: TQuickLinksPanel = {
  default: {
    links: [
      {
        url: "https://yandex.ru/maps",
      },
      {
        url: "https://kinopoisk.ru",
      },
      {
        url: "https://youtube.com",
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

  const handleAddRow = () => {
    const setName = `newSet[${Date.now()}]`;
    setLinksPanel({ ...linksPanel, [setName]: { links: [], isHidden: false } });
  };

  const handleRemoveRow = (setName: string): void => {
    const setCopy = { ...linksPanel };
    delete setCopy[setName];
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
        {Object.entries(linksPanel).map(([name, data]) => (
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
            </LinksList>
            <RowControls
              handleAddLink={handleAddLink}
              handleRemoveRow={handleRemoveRow}
              rowName={name}
              isRowEmpty={!data.links.length}
            />
          </LinksRow>
        ))}
      </LinksSet>
      <div style={{ display: "flex", columnGap: "10px", marginTop: 20 }}>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <GenericButton type="button" onClick={handleAddRow}>
                <SlPlus size={26} />
              </GenericButton>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <TooltipContent side="bottom" sideOffset={20}>
                add new row
              </TooltipContent>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      <Dialog.Root open={!!editingLink} onOpenChange={handleCloseEditModal}>
        <Dialog.Portal>
          <EditDialog>
            <Dialog.Title>Edit link</Dialog.Title>
            <CreateForm
              handleSubmit={handleEditLink}
              defaultValues={editingLink}
            />
          </EditDialog>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
