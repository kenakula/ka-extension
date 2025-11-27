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
import {
  IconWrapper,
  LinkButton,
  LinkItemStyled,
  LinkLabel,
} from './styles';

interface IProps {
  link: IQuickLink;
  handleDeleteLink: (setName: string, linkUrl: string) => void;
  handleEditLink: (setName: string, link: IQuickLink) => void;
  setName: string;
}

export const LinkItem = ({
  link,
  handleDeleteLink,
  handleEditLink,
  setName,
}: IProps): ReactElement => {
  const { url, label, iconName, useCustomIcon } = link;
  const [contextMenuAnchor, setContextMenuAnchor] = useState<Element | null>(null);

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: url });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleCloseContextMenu = (): void => {
    setContextMenuAnchor(null);
  };

  const handleEditClick = (): void => {
    handleEditLink(setName, link);
    handleCloseContextMenu();
  };

  const handleDeleteClick = (): void => {
    handleDeleteLink(setName, link.url);
    handleCloseContextMenu();
  };

  const handleLinkButtonClick = (): void => {
    window.location.href = link.url;
  };

  const handleOpenContextMenu: MouseEventHandler<HTMLLIElement> = (event): void => {
    event.preventDefault();
    setContextMenuAnchor(event.currentTarget);
  };

  return (
    <LinkItemStyled
      ref={setNodeRef}
      style={style} {...attributes} {...listeners}
      onContextMenu={handleOpenContextMenu}
    >
      <LinkButton onClick={handleLinkButtonClick}>
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
