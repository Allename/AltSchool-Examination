import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Counter, Error } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Counter/>,
    errorElement: <Error/>
  }
]);

const App = () => {
  return (
    <RouterProvider router = {router}>
      <div className="App">
      </div>
    </RouterProvider> 
  );
}

export default App;
