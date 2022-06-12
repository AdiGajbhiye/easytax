import { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from '@pages/login';
import Signup from '@pages/signup';
import Home from '@pages/home';
import Dashboard from '@pages/dashboard';
import Portfolio from '@pages/portfolio';
import AddWallet from '@pages/add-wallet';
import Wallet from '@pages/wallet';
import Transaction from '@pages/transaction';
import Cookies from 'js-cookie';

export const AuthContext = createContext({ isLoggedIn: false, login: (_: string) => {}, logout: () => {} });

function App() {
  const [isLoggedIn, setLoggedIn] = useState(!!Cookies.get('accessToken'));
  const login = (token: string) => {
    Cookies.set('accessToken', token);
    setLoggedIn(true);
  };

  const logout = () => {
    Cookies.remove('accessToken');
    setLoggedIn(false);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <BrowserRouter>
        <Routes>
          {isLoggedIn && (
            <Route path="/" element={<Home />}>
              <Route path="" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="add_wallet" element={<AddWallet />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="transaction" element={<Transaction />} />
            </Route>
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={isLoggedIn ? <Navigate to="/" replace /> : <Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
