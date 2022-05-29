import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '@pages/login';
import Signup from '@pages/signup';
import Home from '@pages/home';
import Error from '@pages/error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
