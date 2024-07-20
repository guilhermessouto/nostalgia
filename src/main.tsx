import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from "react-router-dom";
import router from './router'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './services/queryClient';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <div className='text-white bg-background-foreground'>
          <RouterProvider router={router}/>
        </div>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
