import { Icon } from '@components/icon';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IQuickLink } from '@shared/interfaces';
import { MouseEventHandler, ReactElement, useState } from 'react';

import { getFaviconUrl } from '../../helpers';
import { useQuickLinks } from '../../quick-links-context';
import {
  IconWrapper,
  LinkButton,
  LinkItemStyled,
  LinkLabel,
} from './styles';

interface IProps {
  link: IQuickLink;
}

export const LinkItem = ({ link }: IProps): ReactElement => {
  const { id, url, label, iconName, useCustomIcon } = link;
  const [contextMenuAnchor, setContextMenuAnchor] = useState<Element | null>(null);

  const { handleEditLinkDialog, handleDeleteLink } = useQuickLinks();

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleCloseContextMenu = (): void => {
    setContextMenuAnchor(null);
  };

  const handleEditClick = (): void => {
    handleEditLinkDialog(link);
    handleCloseContextMenu();
  };

  const handleDeleteClick = (): void => {
    handleDeleteLink(link.rowId, link.id);
    handleCloseContextMenu();
  };

  const handleOpenContextMenu: MouseEventHandler<HTMLLIElement> = (event): void => {
    event.preventDefault();
    setContextMenuAnchor(event.currentTarget);
  };

  const handleLinkButtonClick: MouseEventHandler<HTMLButtonElement> = (event): void => {
    if (event.metaKey) {
      window.open(link.url, '_blank');

      return;
    }

    window.location.href = link.url;
  };

  const handleLinkMouseDown: MouseEventHandler<HTMLButtonElement> = (event): void => {
    if (event.button == 1 || event.buttons == 4) {
      window.open(link.url, '_blank');
    }
  };

  return (
    <LinkItemStyled
      ref={setNodeRef}
      style={style} {...attributes} {...listeners}
      onContextMenu={handleOpenContextMenu}
    >
      <LinkButton onClick={handleLinkButtonClick} onMouseDown={handleLinkMouseDown}>
        <IconWrapper>
          {useCustomIcon ? (
            <Icon.FaIcon iconName={iconName}/>
          ) : (
            <img
              width={32}
              height={32}
              src={getFaviconUrl(url, 128)}
              alt=""
            />
          )}
        </IconWrapper>

        {label ? <LinkLabel>{label}</LinkLabel> : null}
      </LinkButton>
      <Menu
        id="basic-menu"
        anchorEl={contextMenuAnchor}
        open={Boolean(contextMenuAnchor)}
        onClose={handleCloseContextMenu}
      >
        <MenuItem onClick={handleEditClick}>
          <ListItemIcon>
            <EditIcon/>
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDeleteClick}>
          <ListItemIcon>
            <DeleteIcon/>
          </ListItemIcon>
          <ListItemText color="error">Delete</ListItemText>
        </MenuItem>
      </Menu>
    </LinkItemStyled>
  );
};
