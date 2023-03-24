import { ListContent } from '../../documents/Content';
import { Draggable } from 'react-beautiful-dnd';

export const ListItem = () => {
  return (
    <>
      { ListContent.map((list,index)=>(
      <Draggable draggableId={list.dragId} index={index} key={list.id}>
        {(provided, snapshot) => {
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={list.className}
            >
              { list.text }
            </div>
          }
        }
      </Draggable>
      )) }
    </>
  )
}