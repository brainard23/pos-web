import React from 'react'

// depedencies
import loadable from '@loadable/component';
import { createBrowserRouter } from 'react-router-dom'

// Dashboard
const Dashboard = loadable(()=> import('../pages/Dashboard/Dashboard'))
const Purchase = loadable(()=> import('../pages/Purchase/Purchase'))

const router = createBrowserRouter(
    [
        {
            element: <Dashboard />,
            path: '/dashboard',
        },
        {
            element: <Purchase />,
            path: '/purchase',
        },
    ]
) 
export default router