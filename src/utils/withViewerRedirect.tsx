import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { AppState } from 'frontend/redux/root-reducer';

export const withViewer = (Component: NextPage): NextPage => {
  const Wrapper: NextPage = (props) => {
    const router = useRouter();
    const { viewer } = useSelector((state: AppState) => state.auth);

    useEffect(() => {
      if (viewer) {
        router.replace('/');
      }
    }, [router, viewer]);

    return <Component {...props} />;
  };

  return Wrapper;
};
