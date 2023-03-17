import { useDrag } from 'react-dnd'
import { ItemTypes } from "../dnd/ItemTypes"

export const ListItem = ({ className, name, id }) => {
  const [ { opacity }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { name, id },
      end(item, monitor) {
        const dropResult = monitor.getDropResult()
        if (item && dropResult) {
          console.log('drag:: ', item)
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.3 : 1,
      }),
    }),
    [name, className],
  )
  return (
    <div ref={drag} style={{opacity}} className={className}>
      {name}
    </div>
  )
}