import classnames from 'classnames';
import { useRef, useState } from 'react';
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';
import { Icon } from '../../library/Icon/Icon';
import { DragTypes } from '../../utils/enum';
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
  reorder?: (from: number, to: number) => void;
  examples?: string[];
  selections?: { value: number; label: string }[];
}

export const Motivator = ({
  name,
  description,
  selections,
  color,
  icon,
  index,
  reorder,
  examples,
}: MotivatorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const opacity = useRef<number>(1);
  const dragHandlerId = useRef<any>(null);
  const [isOpen, setOpen] = useState(false);
  const [selection, setSelection] = useState(0);
  if (reorder) {
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

        const hoverClientY =
          (clientOffset as XYCoord).y - hoverBoundingRect.top;

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

    dragHandlerId.current = handlerId;
    opacity.current = isDragging ? 0 : 1;
    drag(drop(ref));
  }

  const cardStyling = {
    0: {},
    1: { marginRight: '-48px', backgroundColor: '#007e29' },
    '-1': { marginLeft: '-48px', backgroundColor: '#d40000' },
  }[selection];

  const selectionsStyling = selections ? { paddingRight: '80px' } : {};

  const iconSize = 18;
  return (
    <div
      ref={ref}
      onClick={e => {
        //  e.preventDefault();
        setOpen(!isOpen);
      }}
      className={styles.card}
      style={{
        backgroundColor: color,
        opacity: opacity.current,
        ...selectionsStyling,
        ...cardStyling,
      }}
      data-handler-id={dragHandlerId.current}>
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
              <Icon icon={'arrowDown'} size={iconSize} />
            </span>
          )}
          <div className={styles.description}>{description}</div>
        </div>
        {selections && (
          <div className={styles.selections}>
            {selections.map(select => (
              <div
                className={styles.selection}
                style={
                  select.value === selection
                    ? {
                        backgroundColor: cardStyling?.backgroundColor,
                        color: 'white',
                        borderRadius: '6px',
                      }
                    : {}
                }
                onClick={e => {
                  e.stopPropagation();
                  setSelection(select.value);
                }}>
                {select.label}
              </div>
            ))}
          </div>
        )}
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
