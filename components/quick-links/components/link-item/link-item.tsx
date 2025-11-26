import { Icon } from '@components/icon/icon';
import { getFaviconUrl } from '@components/quick-links/helpers';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IQuickLink } from '@shared/interfaces';
import { Avatar, ContextMenu } from 'radix-ui';
import { ReactElement } from 'react';
import { BsFillPencilFill, BsTrash3 } from 'react-icons/bs';

import {
  ContextItem,
  ContextMenuContainer,
  IconWrapper,
  LinkButton,
  LinkImage,
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
  const { url, label, iconName, useCustomIcon, iconColor } = link;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: url });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleLinkButtonClick = (): void => {
    window.location.href = link.url;
  };

  return (
    <LinkItemStyled ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <LinkButton onClick={handleLinkButtonClick}>
            {useCustomIcon ? (
              <IconWrapper style={{ color: iconColor }}>
                <Icon.FaIcon iconName={iconName}/>
              </IconWrapper>
            ) : (
              <LinkImage>
                <Avatar.Image
                  width={32}
                  height={32}
                  src={getFaviconUrl(url, 128)}
                />
              </LinkImage>
            )}
            {label ? <LinkLabel>{label}</LinkLabel> : null}
          </LinkButton>
        </ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenuContainer>
            <ContextItem onSelect={() => handleDeleteLink(setName, url)}>
              <BsTrash3/>
              <span>Delete</span>
            </ContextItem>
            <ContextItem onSelect={() => handleEditLink(setName, link)}>
              <BsFillPencilFill/>
              <span>Edit</span>
            </ContextItem>
          </ContextMenuContainer>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    </LinkItemStyled>
  );
};
