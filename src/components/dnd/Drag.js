import { useDrag } from 'react-dnd'
import { ItemTypes } from "../dnd/ItemTypes"

export const ListItem = ({ className, name, id, myProps }) => {
  const [ { opacity }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { name, id, type: ItemTypes.BOX },
      end(item, monitor) {
        const dropResult = monitor.getDropResult()
        if (item && dropResult) {
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.3 : 1,
      }),
    }),
    [name, className, id],
  )
  return (
    <div ref={drag} style={{opacity}} className={className}>
      {name}
    </div>
  )
}