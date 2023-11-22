import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

// Page imports
import LoginPage from './routes/LoginPage/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage/RegisterPage.jsx';
import AdminDash from './routes/AuthPage/AuthPage.jsx';
import { AppContextProvider } from './context/AppContext.jsx';
import AuthenticatorComponent from './components/AuthenticatorComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/auth" element={<AuthenticatorComponent/>}/>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
)
