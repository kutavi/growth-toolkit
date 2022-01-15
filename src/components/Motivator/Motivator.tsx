import classnames from 'classnames';
import { useRef, useState } from 'react';
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';
import { DragTypes } from '../../model/enum';
import * as styles from './Motivator.module.scss';

interface DragItem {
  index: number;
  id: string;
  type: string;
}

interface MotivatorProps {
  name: string;
  description: string;
  color: string;
  icon: string;
  index: number;
  id: string;
  reorder: (from: number, to: number) => void;
  examples?: string[];
}

export const Motivator = ({
  name,
  description,
  color,
  icon,
  index,
  reorder,
  examples,
}: MotivatorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [{ handlerId }, drop] = useDrop({
    accept: DragTypes.card,
    // tslint:disable-next-line: typedef
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor): void {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const middle = 2;
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / middle;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      reorder(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here
      // Generally it's better to avoid mutations
      // but it's good here for the sake of performance to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: DragTypes.card,
    item: () => ({ name, index }),
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      onClick={() => setOpen(!isOpen)}
      className={styles.card}
      style={{ backgroundColor: color, opacity }}
      data-handler-id={handlerId}>
      <div
        className={styles.cardInner}
        style={examples?.length ? {} : { paddingBottom: '12px' }}>
        <img className={styles.image} src={icon} />
        <div className={styles.header}>
          <span className={styles.name}>{name}</span>
          {examples?.length && (
            <span
              className={classnames(styles.collapseButton, {
                [styles.open]: isOpen,
              })}>
              {'>'}
            </span>
          )}
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      {examples?.length && (
        <div
          className={classnames(styles.content, { [styles.hidden]: !isOpen })}>
          <ul className={styles.list}>
            {examples.map(text => (
              <li className={styles.example}>{text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
