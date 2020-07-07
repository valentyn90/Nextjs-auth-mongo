import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/root-reducer';

export const logout = (): void => {
  window.localStorage.setItem('signout', JSON.stringify(Date.now()));
};

export const withAuthSync = (Component: NextPage): NextPage => {
  const Wrapper: NextPage = (props) => {
    const router = useRouter();
    const { viewer } = useSelector((state: AppState) => state.auth);

    useEffect(() => {
      if (!viewer) {
        router.replace('/auth/signin');
      }
    }, [viewer]);

    const syncsignout = (event: StorageEvent): void => {
      if (event.key === 'signout') {
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

    return viewer ? <Component {...props} /> : <h1>Loading...</h1>;
  };

  return Wrapper;
};
