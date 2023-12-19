import React from 'react'
import ReactDOM from 'react-dom/client';
import Palette from './components/Palette.jsx';
import App from './App.jsx';
import './index.css'

// React-router-dom
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/generatePalette',
    element:<Palette/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
