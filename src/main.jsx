import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Alpha from './webp/Alpha.jsx'
import Cube from './webp/cube.jsx'
import Controller from './webp/Controller.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/alpha',
    element: <Alpha />,
  },
  {
    path:'/cube',
    element:<Cube/>
  },
  {
    path:'/controller',
    element:<Controller/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{v7_startTransition: true,}}/>
  </StrictMode>,
)
