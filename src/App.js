import './App.css';
import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/RoutesConfig';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function App() {

   
  return (
    <div className="">
     
     <DndProvider backend={HTML5Backend}>
     <RouterProvider router={router}/>
				</DndProvider>
    </div>
  );
}

export default App;
