import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 import router from './/router/Routes.jsx'
 import { store } from './redux/Store.js'
import { Provider } from 'react-redux'
import ProductCard from './pages/user/ProductCard.jsx';
 


createRoot(document.getElementById('root')).render(
  
  <StrictMode>

    <Provider store={store}>
    <RouterProvider router={router}/>
    <App />
  
    </Provider>
    
  
 </StrictMode>,
 
 
 
)
