import { createMachine, interpret } from 'xstate';
import Cookies from 'js-cookie';

export const isUserLoggedIn = () => {
  const accessToken = Cookies.get('accessToken');
  return !!accessToken;
};

export const getAccessToken = () => Cookies.get('accessToken') || '';

const authMachine = createMachine<void, { type: 'LOGIN'; token: string } | { type: 'LOGOUT' }>({
  initial: isUserLoggedIn() ? 'loggedIn' : 'loggedOut',
  states: {
    loggedIn: {
      on: {
        LOGOUT: {
          target: 'loggedOut',
          actions: () => {
            Cookies.remove('accessToken');
          },
        },
      },
    },
    loggedOut: {
      on: {
        LOGIN: {
          target: 'loggedIn',
          actions: (_, { token }) => {
            Cookies.set('accessToken', token);
          },
        },
      },
    },
  },
});

export const authService = interpret(authMachine).start();
