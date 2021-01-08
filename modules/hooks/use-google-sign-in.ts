import { useEffect, useState } from 'react';

import { GoogleAuth } from '../typescript';
import useScript from './use-script';

interface UseGoogleSignInProps {
  onSuccess: (data: any) => void;
  onFailure: (error: any) => void;
  buttonId: string;
}

const useGoogleSignIn = ({ onSuccess, onFailure, buttonId }: UseGoogleSignInProps) => {
  const [loaded, setLoaded] = useState(false);

  const disconnect = () => {
    if (loaded) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.disconnect();
    }
  };

  const signOut = () => {
    if (loaded) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        disconnect();
      });
    }
  };

  useScript({
    async: false,
    id: 'google-sign-in-script',
    src: 'https://apis.google.com/js/api:client.js',
    callback: () => {
      const element = document.getElementById(buttonId);

      if (!element) return;
      setLoaded(true);

      const attachSignIn = (htmlElement: HTMLElement, auth2: GoogleAuth) => {
        auth2.attachClickHandler(
          htmlElement,
          {},
          googleUser => {
            if (onSuccess) onSuccess(googleUser);
            signOut();
          },
          error => {
            if (onFailure) onFailure(error);
          }
        );
      };

      window.gapi.load('auth2', () => {
        const auth2 = (window as any).gapi.auth2.init({
          client_id: `${process.env.NEXT_PUBLIC_OAUTH_API_KEY!}.apps.googleusercontent.com`,
          cookiepolicy: 'single_host_origin',
        }) as GoogleAuth;

        attachSignIn(element, auth2);
      });
    },
  });

  useEffect(() => {
    return () => {
      disconnect();
    };
  });
  return {
    loaded,
  };
};

export default useGoogleSignIn;
