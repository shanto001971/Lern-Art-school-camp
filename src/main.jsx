import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthProvider from './AuthProvider/AuthProvider';
import 'sweetalert2/dist/sweetalert2.css';



const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      </AuthProvider>
  
  </React.StrictMode>,
)
