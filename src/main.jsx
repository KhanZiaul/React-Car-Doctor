import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import router from './Rotes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='lg:max-w-7xl mx-auto my-5'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)