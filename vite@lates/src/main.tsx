import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { EditCustomerForm } from './component/EditCustomerForm.tsx'
interface Route {
    path: string;
    Component: React.ComponentType;
  }
  
  const routes: Route[] = [
    {
      path: '/',
      Component: App,
    },
    {
      path: '/updateCustomer',
      Component: EditCustomerForm,
    },
  ];

  const router = createBrowserRouter(routes);

  ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
  
      <RouterProvider router={router} />
 
    // </React.StrictMode>
    
  );
  
