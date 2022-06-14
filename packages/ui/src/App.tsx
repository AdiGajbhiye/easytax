import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '@pages/login';
import Signup from '@pages/signup';
import Home from '@pages/home';
import Dashboard from '@pages/dashboard';
import Portfolio from '@pages/portfolio';
import AddWallet from '@pages/add-wallet';
import Wallet from '@pages/wallet';
import Transaction from '@pages/transaction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="add_wallet" element={<AddWallet />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
