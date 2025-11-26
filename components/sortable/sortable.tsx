import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { arrayMove } from '@dnd-kit/sortable'; // Or use arrayMoveImmutable from 'array-move'
import { CSS } from '@dnd-kit/utilities';
import { ReactElement, useState } from 'react';

const SortableItem = ({ id }): ReactElement => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '10px',
    margin: '5px',
    backgroundColor: 'lightblue',
    border: '1px solid blue',
    display: 'inline-block', // For horizontal display
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
};

export const SortableComponent = (): ReactElement => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor),
  );

  const handleDragEnd = (event): void => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        <div
          style={{ display: 'flex', border: '2px solid gray', padding: '10px' }}
        >
          {items.map((id) => (
            <SortableItem key={id} id={id}/>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
