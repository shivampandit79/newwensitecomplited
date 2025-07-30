import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import Footer from './componnents/Footer/Footer.jsx'
import About from './componnents/About/About.jsx'
import ContactUs from './Contact/ContactUs.jsx'
import Github from './Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',

//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home/>
//       },
//       {
//         path: "About",
//         element: <About/>
//       },
//       {
//         path: "ContactUs",
//         element: <ContactUs/>
//       },{
//         path: "/Github",
//         element: <Github/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>
      <Route path='Github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
