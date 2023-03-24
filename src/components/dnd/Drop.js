/* eslint-disable no-use-before-define */
import { useDrop, useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import { useState } from 'react'

export const ListBox = ({hasMates, myProps}) => {
  const [ hasDropped, setHasDropped ] = useState(false)
  const [ nowTitle, setNowTitle ] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [ nowId, setNowId ] = useState('')
  const { newListArr, setNewListArr } = myProps

  // eslint-disable-next-line no-empty-pattern, no-unused-vars
  const [, drag] = useDrag(
    () => ({
      type: ItemTypes.LIST,
      item: {
        name: nowTitle,
        id: nowId,
        type: ItemTypes.LIST
      },
      end(item, monitor){
        const dropResult = monitor.getDropResult()
        if (item && dropResult) {
          // console.log(dropResult)
        }
      }
    }),
  )

  // eslint-disable-next-line no-unused-vars
  const [, drop] = useDrop(
    () => ({
      accept: [ ItemTypes.BOX, ItemTypes.LIST ],
      drop: (item) => {
        if(item.type === ItemTypes.BOX){
          console.log('ItemTypes.BOX')
          setHasDropped(true)
          setNowTitle(item.name)
          setNowId(item.id)
        }else{
          console.log('ItemTypes.LIST')
          setHasDropped(true)
          setNowTitle(item.name)
          setNowId(item.id)
        }
      },
      // hover(item, monitor){
      //   if(item.type === ItemTypes.LIST){
      //     console.log('hover:: ', item)
      //   }
      // }
    }),
  )

  return (
    <>
      <li ref={(node) => drag(drop(node))} style={{ marginTop: `${hasMates? '16px': "0"}` }} className={`${hasDropped? "lsit-content" : "w-412 h-100 rounded-3xl border-dashed border-green border-2"}`}>
        { nowTitle }
      </li> 
    </>
  )
}