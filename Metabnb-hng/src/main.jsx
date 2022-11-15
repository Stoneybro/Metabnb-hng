import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Places from './pages/Places'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />}/>
      <Route path='/places' element={<Places />}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
