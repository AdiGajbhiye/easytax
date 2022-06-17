import './App.css';
import { Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from 'history/browser';
import Login from '@pages/login';
import Signup from '@pages/signup';
import Home from '@pages/home';
import Dashboard from '@pages/dashboard';
import Portfolio from '@pages/portfolio';
import AddWallet from '@pages/add-wallet';
import Wallet from '@pages/wallet';
import Transaction from '@pages/transaction';
import { authService } from '@service/auth';

function App() {
  return (
    <HistoryRouter history={history}>
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
        <Route
          path="/login"
          element={authService.state.value === 'loggedOut' ? <Login /> : <Navigate to="/" replace />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
