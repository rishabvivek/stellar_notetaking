import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Main from './screens/Main';
import Login from './screens/login/Login';
import { NextUIProvider } from '@nextui-org/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element= {<Login />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </NextUIProvider>
);
