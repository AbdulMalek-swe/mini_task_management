import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const TaskCard = ({task,handleDelete}) => {
    const { assigned_name, message, id , priority} = task;
    return (
        <>
        {/*<!-- Component: E-commerce card --> */}
        <div className="overflow-hidden w-auto rounded bg-white text-slate-500 shadow-md shadow-slate-200">
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