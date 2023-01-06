import './App.css';
import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/RoutesConfig';
function App() {

   
  return (
    <div className="">
     <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
