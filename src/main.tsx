import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from './routes/Root'
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
import AboutMe from './routes/AboutMe';
import Post from './routes/Post';
import postsData from './assets/postsData'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "posts/:postId",
        element: <Post />,
        loader: params => postsData.find(post => post.uuid === params.params.postId)  
      },
      {
        path: "about-me",
        element: <AboutMe />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
