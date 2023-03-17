/* eslint-disable no-use-before-define */
import { useDrop, useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import { useState } from 'react'

export const ListBox = ({hasMates}) => {
  const [ hasDropped, setHasDropped ] = useState(false)
  const [ nowTitle, setNowTitle ] = useState('')
  const [ nowId, setNowId ] = useState('')

  // eslint-disable-next-line no-empty-pattern, no-unused-vars
  const [, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { nowId, nowTitle },
      end: (item) => {
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [ nowId, nowTitle ],
  )

  // eslint-disable-next-line no-unused-vars
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop: (item) => {
        setHasDropped(true)
        setNowTitle(item.name)
        setNowId(item.id)
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [ setHasDropped, setNowId],
  )

  return (
    // <li ref={(node) => drag(drop(node))} style={{ marginTop: `${hasMates? '16px': "0"}` }} className={`${hasDropped? "lsit-content" : "w-412 h-100 rounded-3xl border-dashed border-green border-2"}`}>
    //   { nowTitle }
    // </li>
    <li ref={drop} style={{ marginTop: `${hasMates? '16px': "0"}` }} className={`${hasDropped? "lsit-content" : "w-412 h-100 rounded-3xl border-dashed border-green border-2"}`}>
      { nowTitle }
    </li>
  )
}