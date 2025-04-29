
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router =createBrowserRouter([
  {
    path:'/',
     element:<Index/>
  }
])
import './App.css'
import Index from '.';

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
