import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './components/about'
import Blogs from './components/blogs'
import Contact from './components/contact'
import Home from './components/home'
import Layout from './components/layout'
import Services from './components/services'
import Classes from './components/classes'


function App() {  
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'services',
          element: <Services />
        },
        {
          path: 'classes',
          element: <Classes />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'blogs',
          element: <Blogs />
        },
        {
          path: 'contact',
          element: <Contact  />
        }
      ]
    },
    
    // * is used when no matching found
    {path: '*', element: <>404 Page Not Found</>}
  ])
  return (
    <> 
      <RouterProvider router= {router} />
    </>
  )
}

export default App
