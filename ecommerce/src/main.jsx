import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './Route/Route.jsx'
import { store } from './store/Store.jsx'
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <ToastContainer
        position="top-right"
        autoClose={3000}  // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <RouterProvider router={router} />
  </StrictMode>
  </Provider>
  ,
)
