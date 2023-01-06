import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskUpdate = () => {
    const [taskUpdate, setTaskUpdate] = useState({});
    const {taskId} = useParams();
    var myHeaders = new Headers();
    myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");
    var formdata = new FormData();
    const taskUpdateData = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...taskUpdate };
        newData[field] = value;
        setTaskUpdate(newData)
    }
    const handleSubmit = (e) => {
       
        formdata.append("message",taskUpdate.message);
        formdata.append("due_date", taskUpdate.date);
        formdata.append("priority", taskUpdate.priority);
        formdata.append("assigned_to", taskUpdate.assign);
        formdata.append("taskid", taskId);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://devza.com/tests/tasks/update", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            e.preventDefault()
    }
    return (
        <div className="container mx-auto">
            <h1 className="text-center my-6 font-semibold text-4xl text-gray-900">Add Your Task</h1>
            <div className="mx-auto max-w-2xl mt-8">
                <form action="" onSubmit={handleSubmit}>
                    {/* <!-- Component: Rounded large basic input --> */}
                    <div className="h-auto">
                        <div className="relative my-6">
                            <input id="id-l01" type="text" required name="message" placeholder="task message" onChange={(e) => taskUpdateData(e)} className="relative w-full h-12 px-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-slate-200 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label htmlFor="id-l01" className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-slate-200 peer-required:after:content-['']  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                🔖 Task Message
                            </label>

                        </div>
                        <div className="relative my-6">
                            <input id="id-l02" type="datetime-local" name="date" placeholder="your name" onChange={(e) => taskUpdateData(e)} className="relative w-full h-12 px-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-slate-200 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label htmlFor="id-l02" className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-slate-200 peer-required:after:content-['']  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                🔖 Date Time
                            </label>

                        </div>
                        <div className="relative my-6">
                            <input id="priority" type="number" name="" placeholder="task priority" onChange={(e) => taskUpdateData(e)} min="1" max="3" className="relative w-full h-12 px-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-slate-200 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label htmlFor="id-l03" className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-slate-200 peer-required:after:content-['']  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                🔖 Task Priority
                            </label>

                        </div>
                        <div className="relative my-6">
                            <input id="id-l04" type="number" min="1" name="assign" placeholder="your assign" onChange={(e) => taskUpdateData(e)} className="relative w-full h-12 px-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-slate-200 focus:border-emerald-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label htmlFor="id-l04" className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-slate-200 peer-required:after:content-['']  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                🔖 Task Assign To                            </label>

                        </div>
                    </div>
                    {/*<!-- Component: Large primary elevated button --> */}
                    <button className="inline-flex mt-4 h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-emerald-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-md focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>Update Task</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TaskUpdate;