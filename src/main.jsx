import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import router from './Rotes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='lg:max-w-7xl mx-auto my-5'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)