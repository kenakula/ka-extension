import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
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
  handleSort: (setName: string, from: number, to: number) => void;
}

export const LinksRow = ({
  list,
  setName,
  handleEdit,
  handleAdd,
  handleDelete,
  handleSort,
}: IProps): ReactElement => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor),
  );

  const handleDragEnd = (event): void => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const activeElementIndex = event.active.data.current.sortable.index;
      const targetElementIndex = event.over.data.current.sortable.index;
      handleSort(setName, activeElementIndex, targetElementIndex);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors} collisionDetection={closestCenter}>
      <SortableContext
        items={list.map(item => ({
          id: item.url,
        }))} strategy={horizontalListSortingStrategy}
      >
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
          <AddLinkButton rowName={setName} addLink={handleAdd}/>
        </LinksList>
      </SortableContext>
    </DndContext>
  );
};
