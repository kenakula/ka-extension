import { ReactElement } from "react";

import { getFaviconUrl } from "~components/quick-links/helpers";
import {
  ContextItem,
  ContextMenuContainer,
  Link,
  LinkImage,
  LinkItemStyled,
} from "~components/quick-links/styles";
import { Avatar, ContextMenu } from "~node_modules/radix-ui";
import { BsFillPencilFill, BsTrash3 } from "~node_modules/react-icons/bs";
import { IQuickLink } from "~shared/interfaces";

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
  const { url, label } = link;

  return (
    <LinkItemStyled>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <Link href={url}>
            <LinkImage>
              <Avatar.Image
                width={32}
                height={32}
                src={getFaviconUrl(url, 128)}
              />
            </LinkImage>
            {label ? <span>{label}</span> : null}
          </Link>
        </ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenuContainer>
            <ContextItem onSelect={() => handleDeleteLink(setName, url)}>
              <BsTrash3 />
              <span>Delete</span>
            </ContextItem>
            <ContextItem onSelect={() => handleEditLink(setName, link)}>
              <BsFillPencilFill />
              <span>Edit</span>
            </ContextItem>
          </ContextMenuContainer>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    </LinkItemStyled>
  );
};
