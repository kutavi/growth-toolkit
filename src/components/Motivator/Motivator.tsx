import classnames from 'classnames';
import { useRef, useState } from 'react';
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';
import { Icon } from '../../library/Icon/Icon';
import * as colors from '../../styles/_base.module.scss';
import { DragTypes } from '../../utils/const';
import { isTouchDevice, track } from '../../utils/helpers';
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
  id: number;
  icon: string;
  index: number;
  currentSelection?: number;
  reorder?: (from: number, to: number) => void;
  makeSelection?: (selection: number) => void;
  examples?: string[];
  selections?: { value: number; label: string }[];
}
const shiftBy = '48px';

export const Motivator = ({
  name,
  description,
  selections,
  currentSelection = 0,
  color,
  icon,
  index,
  reorder,
  makeSelection,
  examples,
}: MotivatorProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const opacity = useRef<number>(1);
  const dragHandlerId = useRef<any>(null);
  const [isOpen, setOpen] = useState(false);

  if (reorder) {
    const [{ handlerId }, drop] = useDrop({
      accept: DragTypes.card,
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

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        reorder(dragIndex, hoverIndex);

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
    const dragOpacity = isTouchDevice() ? 0.4 : 0;
    dragHandlerId.current = handlerId;
    opacity.current = isDragging ? dragOpacity : 1;
    drag(drop(ref));
  }

  const cardStyling = {
    0: {},
    1: {
      marginRight: `-${shiftBy}`,
      backgroundColor: colors.yes,
      marginLeft: shiftBy,
    },
    '-1': {
      marginLeft: `-${shiftBy}`,
      backgroundColor: colors.no,
      marginRight: shiftBy,
    },
  }[currentSelection];

  const selectionsStyling = selections ? { paddingRight: '80px' } : {};

  const iconSize = 18;
  return (
    <div
      ref={ref}
      onClick={e => {
        setOpen(!isOpen);
        track(isOpen ? 'Collapsed motivator' : 'Expanded motivator');
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
        <img className={styles.image} src={icon} alt={`Image for ${name}`} />
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
                key={select.value}
                style={
                  select.value === currentSelection
                    ? {
                        backgroundColor: cardStyling?.backgroundColor,
                        color: 'white',
                        borderRadius: '6px',
                      }
                    : {}
                }
                onClick={e => {
                  e.stopPropagation();
                  if (makeSelection) {
                    makeSelection(select.value);
                  }
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
            {examples.map((text, idx) => (
              <li key={idx} className={styles.example}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
