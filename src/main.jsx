import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './Components/AboutSection/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Users from './Components/Users/Users';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
import UserDetails from './Components/UserDetails/UserDetails';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error>,

    children:[

       { 
        path:'/about',
        element: <About></About>,
      },

        {
          path:'/contact',
          element: <Contact></Contact>
        }  ,
        
        {
          path:'/users',

          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),

          element:<Users></Users>,
        },

        {
          path:'/user/:userId',
          loader:({ params })=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element:<UserDetails></UserDetails>
        },

        {
          path:'/posts',
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
          element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          // params banan sothik vabe likte hobe 
          element: <PostDetails></PostDetails>
        }
    ]
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
