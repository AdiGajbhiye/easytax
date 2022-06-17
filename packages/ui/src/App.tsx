import './App.css';
import { Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from 'history/browser';
import AddWallet from '@pages/AddWallet';
import Dashboard from '@pages/Dashboard';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Portfolio from '@pages/Portfolio';
import Settings from '@pages/Settings';
import Signup from '@pages/Signup';
import Transaction from '@pages/Transaction';
import Wallet from '@pages/Wallet';
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
          <Route path="settings" element={<Settings />} />
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
