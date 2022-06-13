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
import { authMachine } from '@service/auth';
import { useMachine } from '@xstate/react';

function App() {
  const [state] = useMachine(authMachine);
  const isLoggedIn = state.value === 'loggedIn';

  return (
    <BrowserRouter>
      <Routes>
        {/* {isLoggedIn && (
        )} */}
        <Route path="/" element={<Home />}>
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="add_wallet" element={<AddWallet />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="transaction" element={<Transaction />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={isLoggedIn ? <Navigate to="/" replace /> : <Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
