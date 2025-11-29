import { QUICK_LINKS_LISTS } from '@shared/constants';
import { IQuickLink, IQuickLinksRow } from '@shared/interfaces';
import { getId } from '@shared/utils';
import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

const STORAGE_LINKS_KEY = 'kp_quick_links';

interface IQuiLinksContext {
  isSettingsDrawerOpen: boolean;
  linksRows: IQuickLinksRow[];
  editingLink: IQuickLink | null;
  handleOpenDrawer: () => void;
  handleCloseDrawer: () => void;
  handleRenameRow: (rowId: string, newName: string) => void;
  toggleRowVisibility: (rowId: string) => void;
  handleDeleteRow: (rowId: string) => void;
  handleAddRow: () => void;
  handleEditLinkDialog: (links: IQuickLink | null) => void;
  handleEditLink: (link: IQuickLink) => void;
  handleDeleteLink: (setId: string, linkId: string) => void;
  handleAddLink: (link: IQuickLink) => void;
  handleSortLinks: (rowId: string, from: number, to: number) => void;
}

const QuickLinksContext = createContext<IQuiLinksContext>({} as IQuiLinksContext);

export const QuickLinksProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false);
  const [linksRows, setLinksRows] = useState<IQuickLinksRow[]>([]);
  const [editingLink, setEditingLink] = useState<IQuickLink | null>(null);

  const handleEditLinkDialog = (link: IQuickLink | null): void => {
    setEditingLink(link);
  };

  const handleOpenDrawer = (): void => {
    setIsSettingsDrawerOpen(true);
  };

  const handleCloseDrawer = (): void => {
    setIsSettingsDrawerOpen(false);
  };

  const handleRenameRow = (rowId: string, newName: string): void => {
    const copy = linksRows.slice();
    const row = copy.find(({ id }) => id === rowId);
    row.name = newName;

    setLinksRows(copy);
  };

  const toggleRowVisibility = (rowId: string): void => {
    const copy = linksRows.slice();
    const row = copy.find(({ id }) => id === rowId);
    row.isHidden = !row.isHidden;

    console.log(copy);

    setLinksRows(copy);
  };

  const handleDeleteRow = (rowId: string): void => {
    const copy = linksRows.filter(({ id }) => id !== rowId);

    setLinksRows(copy);
  };

  const handleAddRow = (): void => {
    const list = linksRows.slice();
    list.push({
      id: getId(),
      isHidden: false,
      name: 'new set',
      links: [],
    });

    setLinksRows(list);
  };

  const handleEditLink = (link: IQuickLink): void => {
    const copy = linksRows.slice();
    const row = copy.find(({ id }) => id === link.rowId);
    const linkIndex = row.links.findIndex(({ id }) => id === link.id);

    row.links[linkIndex] = link;
    setLinksRows(copy);
    setEditingLink(null);
  };

  const handleDeleteLink = (rowId: string, linkId: string): void => {
    const copy = linksRows.slice();
    const row = copy.find(({ id }) => id === rowId);

    row.links = row.links.filter(({ id }) => id !== linkId);
    setLinksRows(copy);
  };

  const handleAddLink = (link: IQuickLink): void => {
    const copy = linksRows.slice();
    const row = copy.find(({ id }) => id === link.rowId);
    row.links.push(link);

    setLinksRows(copy);
  };

  const handleSortLinks = (rowId: string, from: number, to: number): void => {
    const copy = linksRows.slice();
    const links = copy.find(({ id }) => id === rowId)?.links;

    if (!links) return;

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

    setLinksRows(copy);
  };

  useEffect(() => {
    const storedLinksRows =
      localStorage.getItem(STORAGE_LINKS_KEY) ?? JSON.stringify(QUICK_LINKS_LISTS);
    setLinksRows(JSON.parse(storedLinksRows));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_LINKS_KEY, JSON.stringify(linksRows));
  }, [linksRows]);

  const value = {
    isSettingsDrawerOpen,
    linksRows,
    editingLink,
    handleCloseDrawer,
    handleOpenDrawer,
    handleRenameRow,
    toggleRowVisibility,
    handleDeleteRow,
    handleAddRow,
    handleEditLinkDialog,
    handleEditLink,
    handleDeleteLink,
    handleAddLink,
    handleSortLinks,
  };

  return (
    <QuickLinksContext.Provider value={value}>
      {children}
    </QuickLinksContext.Provider>
  );
};

export const useQuickLinks = (): IQuiLinksContext => useContext(QuickLinksContext);