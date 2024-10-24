import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HomePage from './routes/Home/index.jsx';
import ContadorPage from './routes/Contador/index.jsx';
import SaludoPage from './routes/Saludo/index.jsx';
import TareasPage from './routes/Tareas/index.jsx';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contador",
    element: <ContadorPage />
  },
  {
    path: "/saludo",
    element: <SaludoPage />
  },
  {
    path: "/tareas",
    element: <TareasPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
