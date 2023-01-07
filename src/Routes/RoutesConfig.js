import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import Home from "../Pages/Home/Home";
import UserList from "../Pages/UserList/UserList";
import TaskUpdate from "../Pages/TaskUpdate/TaskUpdate";
import Example from "../Pages/dnd/example";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children:[
            {
                path:"/dnd",
                element:<Example/>
            },
            {
             path:"/",
             element:<Home/>
            },
            {
             path:"/add/task",
             element:<AddTask/>
            },
            {
             path:"/task/update/:taskId",
             element:<TaskUpdate/>
            },
            {
             path:"/task/list/user",
             element:<UserList/>
            }
        ]
            
        

    },
])