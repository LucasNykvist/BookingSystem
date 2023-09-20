import React from 'react';
import './App.css';
import Homeview from './views/Homeview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homeview />} />
        <Route path='/login' element={<LoginView />} />
        <Route path='/register' element={<RegisterView />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
