import { IQuickLink } from '@shared/interfaces';
import { ReactElement } from 'react';

import { AddLinkButton } from '../add-link-button/add-link-button';
import { LinkItem } from '../link-item/link-item';
import { LinksList } from './styles';

interface IProps {
  list: IQuickLink[];
  setName: string;
  handleEdit: (setName: string, link: IQuickLink) => void;
  handleDelete: (setName: string, linkUrl: string) => void;
  handleAdd: (link: IQuickLink, setName: string) => void;
}

export const LinksRow = ({
  list,
  setName,
  handleEdit,
  handleAdd,
  handleDelete,
}: IProps): ReactElement => {
  return (
    <LinksList>
      {list.map((link) => (
        <LinkItem
          key={link.url}
          link={link}
          setName={setName}
          handleDeleteLink={handleDelete}
          handleEditLink={handleEdit}
        />
      ))}
      <AddLinkButton rowName={setName} addLink={handleAdd} />
    </LinksList>
  );
};
