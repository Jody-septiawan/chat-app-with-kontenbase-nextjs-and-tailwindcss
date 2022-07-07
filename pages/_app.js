import AOS from 'aos';
import { useEffect } from 'react';

import '../styles/globals.css';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
