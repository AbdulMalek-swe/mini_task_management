import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from '../../Components/TaskCard/TaskCard';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
const Home = () => {
    const [tasks, setTasks] = useState([]);
    const { user } = useContext(AuthContext)
    var formdata = new FormData();
    const config = {
        headers: {
            "AuthToken": "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a"
        }
    };
    // get all task list 
    useEffect(() => {
        axios.get("https://devza.com/tests/tasks/list", config)
            .then(data => {
                // setTasks(data?.data?.tasks)
                let filterTask;
                if(user){
                    filterTask = data.data.tasks.filter(item => {
                        if(item.assigned_name==false || item.assigned_name==true){
                            return null;
                        }
                        else{
                           let neededUser = item.assigned_name.toLowerCase().includes(user.toLowerCase());
                            return neededUser;
                        }
                    })
                }
                if (filterTask) {
                    setTasks(filterTask)
                }
                else {
                    setTasks(data?.data?.tasks)
                }

            })
    }, [user]);
    // delete the selected task 
    const handleDelete = (id) => {
        console.log(id)
        const consent = window.confirm("are you sure to delete task?")
        if (consent) {
            var myHeaders = new Headers();
            myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");
            formdata.append("taskid", id);
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            fetch("https://devza.com/tests/tasks/delete", requestOptions)
                .then(response => response.text())
                .then(result => {
                    const filterTask = tasks.filter((task => task.id !== id))
                    console.log(filterTask)
                    setTasks(filterTask);
                })
                .catch(error => console.log('error', error));
        }
        else {
            return;
        }
    }


    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    tasks?.sort((a, b) => b.due_date - a.due_date).sort((a, b) => b.priority
                        - a.priority
                    ).map(task => <TaskCard task={task} key={task.id} handleDelete={handleDelete} />)
                }
            </div>
        </div>
    );
};

export default Home;