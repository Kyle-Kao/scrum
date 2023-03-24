import { Droppable } from "react-beautiful-dnd";

export const ListBox = ({hasMates}) => {
  return (
    <Droppable droppableId="listBox" type="BOX">
      {(provided, snapshot) => {
        <li 
          ref={provided.innerRef} 
          style={{ marginTop: `${hasMates? '16px': "0"}` }} 
          className={`${snapshot.isDraggingOver}? "lsit-content" : "w-412 h-100 rounded-3xl border-dashed border-green border-2"}`}>
          { provided.placeholder }
        </li>
        }
      }
    </Droppable>
  )
}