import React from 'react';
import { Link } from 'react-router-dom';

const TextLink: React.FC = ({ children }) => <span className="px-2">{children}</span>;

function NavBar() {
  return (
    <div className="flex justify-between w-full py-4 bg-blue-400 text-slate-200">
      <div>
        <Link to="/dashboard">Icon</Link>
      </div>
      <div>
        <Link to="/dashboard">
          <TextLink>Dashboard</TextLink>
        </Link>
        <Link to="/portfolio">
          <TextLink>Portfolio</TextLink>
        </Link>
        <Link to="/add_wallet">
          <TextLink>Add wallet</TextLink>
        </Link>
        <Link to="/wallet">
          <TextLink>Wallet</TextLink>
        </Link>
        <Link to="/transaction">
          <TextLink>Transaction</TextLink>
        </Link>
      </div>
      <div>Dropdown</div>
    </div>
  );
}

export default NavBar;
