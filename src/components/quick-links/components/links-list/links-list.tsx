import {
  closestCenter,
  DndContext, DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { IQuickLink } from '@shared/interfaces';
import { ReactElement } from 'react';

import { useQuickLinks } from '../../quick-links-context';
import { AddLinkButton } from '../add-link-button';
import { LinkItem } from '../link-item';
import { LinksListStyled } from './styles';

interface IProps {
  links: IQuickLink[];
  rowId: string;
}

export const LinksList = ({ links, rowId }: IProps): ReactElement => {
  const { handleSortLinks } = useQuickLinks();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor),
  );

  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const activeElementIndex = event.active.data.current.sortable.index;
      const targetElementIndex = event.over.data.current.sortable.index;
      handleSortLinks(rowId, activeElementIndex, targetElementIndex);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors} collisionDetection={closestCenter}>
      <SortableContext items={links.map(({ id }) => id)} strategy={horizontalListSortingStrategy}>
        <LinksListStyled>
          {links.map((link) => <LinkItem key={link.id} link={link}/>)}
          <AddLinkButton rowId={rowId}/>
        </LinksListStyled>
      </SortableContext>
    </DndContext>
  );
};
