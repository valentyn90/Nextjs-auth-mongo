import React, { useEffect } from 'react';
import Router from 'next/router';
import { NextPage } from 'next';

export const logout = (): void => {
  console.log('signout');
  window.localStorage.setItem('signout', JSON.stringify(Date.now()));
};

export const withAuthSync = (Component: NextPage): NextPage => {
  const Wrapper: NextPage = (props) => {
    const syncsignout = (event: StorageEvent): void => {
      if (event.key === 'signout') {
        console.log('signout');
        Router.push('/auth/signin');
      }
    };
    useEffect(() => {
      window.addEventListener('storage', syncsignout);

      return (): void => {
        window.removeEventListener('storage', syncsignout);
        window.localStorage.removeItem('signout');
      };
    }, []);

    return <Component {...props} />;
  };

  return Wrapper;
};
