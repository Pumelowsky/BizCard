import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './components/App'
import MyForm from './components/MyForm'
import ErrorPage from './components/ErrorPage'
import './components/index.css'
import Generate from './components/Generate';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/form",
    element: <MyForm />,
  },
  {
    path: "/generate",
    element: <Generate />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
