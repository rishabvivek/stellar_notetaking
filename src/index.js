import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Main from './screens/Main';
import Login from './screens/login/Login';
import Test from './screens/test/Test';
import { NextUIProvider } from '@nextui-org/react';
import MyEditor from './screens/editor/Editor';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <GoogleOAuthProvider clientId="793659973810-a3fq20tl6qnmh7il5g5ndg5d2l47c5du.apps.googleusercontent.com">
    <NextUIProvider>
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/main" element={<Main />} />
            <Route path="/login" element= {<Login />} />
            <Route path="/draft" element = {<MyEditor />}/>
          </Routes>
        </Router>
      </React.StrictMode>
    </NextUIProvider>
  </GoogleOAuthProvider>
);
