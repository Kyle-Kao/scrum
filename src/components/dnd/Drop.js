/* eslint-disable no-use-before-define */
import { useDrop, useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import { useState, useRef } from 'react'

export const ListBox = ({myProps, id, index, name, dynamicData}) => {
  const [ hasDropped, setHasDropped ] = useState(false)
  const [ nowTitle, setNowTitle ] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [ nowId, setNowId ] = useState('')
  const { newListArr, setNewListArr, dropList, setDropList } = myProps

  const ref = useRef(null)

  // eslint-disable-next-line no-empty-pattern, no-unused-vars
  const [, drag] = useDrag(
    () => ({
      type: ItemTypes.LIST,
      item: () => {
        return { id, index }
      },
      end(item, monitor){
        console.log('drag-inside:: ', item)
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
          setNewListArr(list=> list.filter(_item => _item.id !== item.id))

          const withList = [...dropList]
          withList.push({
            name: item.name,
            id: item.id
          })
          setDropList(withList)

          setHasDropped(true)
          setNowTitle(item.name)
          setNowId(item.id)
        }else{
          // setHasDropped(true)
          // setNowTitle(item.name)
          // setNowId(item.id)
        }
      },
      // hover(item, monitor){
      //   if (!ref.current) {
      //     return
      //   }
      // }
    }),
  )
  drag(drop(ref))
  console.log('dynamicData:: ', dynamicData)
  return (
    <>
      <li ref={ref} className={`${name!==''? "list-data-content" : "w-412 h-100 rounded-3xl border-dashed border-green border-2 mt-4"}`}>
        { name }
      </li>
      {/* <li ref={ref} style={{ marginTop: `${hasMates? '16px': "0"}` }} className={`${hasDropped? "lsit-content" : "w-412 h-100 rounded-3xl border-dashed border-green border-2"}`}>
        { nowTitle }
      </li>  */}
    </>
  )
}