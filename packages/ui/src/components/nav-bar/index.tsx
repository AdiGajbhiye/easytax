import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDownIcon, UserIcon, LogoutIcon, CogIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import { authService } from '@service/auth';

const TextLink: React.FC = ({ children }) => <span className="px-2">{children}</span>;

function NavBar() {
  const navigate = useNavigate();

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
      <Menu as="div" className="relative">
        <div>
          <Menu.Button>
            <div className="flex items-center">
              <UserIcon className="h-6 w-6 text-white" aria-hidden="true" />
              <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item as="button">
              <div className="p-2 text-left text-black flex items-center">
                <CogIcon className="h-5 w-5 text-black" />
                <div className="mx-2">Settings</div>
              </div>
            </Menu.Item>
            <Menu.Item>
              <button
                type="button"
                className="p-2 text-left text-black flex items-center"
                onClick={() => {
                  authService.send('LOGOUT');
                  navigate('/login');
                }}
              >
                <LogoutIcon className="h-5 w-5 text-black" />
                <div className="mx-2">Logout</div>
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default NavBar;
