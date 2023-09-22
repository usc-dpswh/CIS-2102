import React from 'react'
import ReactDOM from 'react-dom/client'

import FirstActivity from './routes/FirstActivity.jsx';
import SecondActivity from './routes/SecondActivity.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './context/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/input-student" element={<FirstActivity />} />
          <Route path="/form-validate" element={<SecondActivity />} />
        </Routes>

      </BrowserRouter>
      
    </AppContextProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
