import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import './App.scss'
import Product from './pages/Product/Product.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/products.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navabar.jsx';


const Layout = () => {
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products/:id',
        element: <Products/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      },
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
