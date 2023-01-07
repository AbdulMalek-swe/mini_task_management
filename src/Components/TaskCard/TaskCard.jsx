import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import {AiFillDelete} from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const TaskCard = ({task,handleDelete,moveCard,index}) => {
    const ref = useRef(null);
    const { assigned_name, message, id , priority } = task;
    const [{ handlerId }, drop] = useDrop({
        accept: 'task',
        collect(monitor) {
          return {
            handlerId: monitor.getHandlerId(),
          }
        },
        hover(item, monitor) {
          if (!ref.current) {
            return
          }
          const dragIndex = item.index
          const hoverIndex = index
          // Don't replace items with themselves
          if (dragIndex === hoverIndex) {
            return
          }
          // Determine rectangle on screen
          const hoverBoundingRect = ref.current?.getBoundingClientRect()
          // Get vertical middle
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
          // Determine mouse position
          const clientOffset = monitor.getClientOffset()
          // Get pixels to the top
          const hoverClientY = clientOffset.y - hoverBoundingRect.top
          // Only perform the move when the mouse has crossed half of the items height
          // When dragging downwards, only move when the cursor is below 50%
          // When dragging upwards, only move when the cursor is above 50%
          // Dragging downwards
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
          }
          // Dragging upwards
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
          }
          // Time to actually perform the action
          moveCard(dragIndex, hoverIndex)
          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          item.index = hoverIndex
        },
      })
      const [{ isDragging }, drag] = useDrag({
        type: "task",
        item: () => {
          return { id, index }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      })
      const opacity = isDragging ? 0 : 1
      drag(drop(ref))
    return (
        <>
        {/*<!-- Component: card --> */}
        <div className="overflow-hidden w-auto rounded bg-white text-slate-500 shadow-md shadow-slate-200" ref={ref} style={{   opacity }} data-handler-id={handlerId}>
            {/*  <!-- Body--> */}
            <div className="p-6">
                <header className="mb-4 flex justify-between items-center">
                    <h3 className="text-xl font-medium text-slate-700">
                        {assigned_name}
                    </h3>
                    <div className="flex justify-evenly items-center cursor-pointer text-xl space-x-2">
                        {/* /tasks/:id/edit */}
                        {/**/}
                        <Link to={`/task/update/${id}`}>
                            <button onClick={() => { }}> <FaEdit /></button>
                        </Link>
                        {/* delete task  */}
                        <button onClick={() => handleDelete(id)}><AiFillDelete/></button>
                    </div>
                </header>
            </div>
            {/*  <!-- show task message --> */}
            <div className="flex justify-end p-6 pt-0">
                 {message} <p>{priority}</p>
            </div >
        </div >
        {/*<!-- End E-commerce card --> */}
    </>
    );
};

export default TaskCard;